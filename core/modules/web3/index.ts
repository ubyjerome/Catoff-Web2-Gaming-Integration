import { Configs } from "../../configs";
import logger from "../../utils/logger";
import {
  Keypair,
  Connection,
  clusterApiUrl,
  Transaction,
  SystemProgram,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js";

export const web3Network = Configs.web3.solanaNetwork as
  | "mainnet-beta"
  | "devnet"
  | "testnet";
export const web3Connection = new Connection(
  clusterApiUrl(web3Network),
  "confirmed"
);

export const solanaAccountKeypair = Keypair.fromSecretKey(
  Uint8Array.from(Configs.web3.privateKeyArray)
);

export const initializeWeb3 = async (): Promise<void> => {
  try {
    logger.info(
      `Solana Account Public Key: ${solanaAccountKeypair.publicKey.toString()}`
    );
    const balance =
      (await web3Connection.getBalance(solanaAccountKeypair.publicKey)) / 1e9;
    logger.info(`Wallet Balance: ${balance} SOL`);
  } catch (error) {
    logger.error(`Failed to initialize web3: ${error}`);
    process.exit(1);
  }
};

export const prepareConnectWalletTransaction = async (
  userPublicKey: string
): Promise<string> => {
  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  ); // Use the appropriate RPC URL
  const programId = new PublicKey(Configs.web3.solanaProgramId);

  // Fetch the recent blockhash
  const { blockhash } = await connection.getLatestBlockhash();

  const transaction = new Transaction({
    recentBlockhash: blockhash, // Set the recent blockhash
    feePayer: new PublicKey(userPublicKey), // Set the fee payer
  }).add(
    new TransactionInstruction({
      programId,
      keys: [
        {
          pubkey: new PublicKey(userPublicKey),
          isSigner: true,
          isWritable: false,
        },
      ],
      data: Buffer.from([0]), // Instruction index for connect_wallet
    })
  );

  return transaction
    .serialize({ requireAllSignatures: false })
    .toString("base64");
};

export const confirmConnectWalletTransaction = async (
  signedTransaction: string
): Promise<string> => {
  const transactionBuffer = Buffer.from(signedTransaction, "base64");
  const tx = await web3Connection.sendRawTransaction(transactionBuffer, {
    skipPreflight: false,
    preflightCommitment: "confirmed",
  });
  return tx;
};

export const prepareCreateWagerTransaction = async (
  amount: number,
  creatorPublicKey: string
): Promise<string> => {
  const programId = new PublicKey(Configs.web3.solanaProgramId);
  const creator = new PublicKey(creatorPublicKey);
  const wagerAccount = Keypair.generate();
  const { blockhash } = await web3Connection.getLatestBlockhash();

  const transaction = new Transaction({
    recentBlockhash: blockhash, // Set the recent blockhash
    feePayer: new PublicKey(creatorPublicKey),
  }).add(
    SystemProgram.createAccount({
      fromPubkey: creator,
      newAccountPubkey: wagerAccount.publicKey,
      lamports: await web3Connection.getMinimumBalanceForRentExemption(1000), // Adjust size as needed
      space: 1000, // Adjust size as needed
      programId,
    }),
    new TransactionInstruction({
      programId,
      keys: [
        { pubkey: creator, isSigner: true, isWritable: true },
        { pubkey: wagerAccount.publicKey, isSigner: true, isWritable: true },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
      ],
      data: Buffer.from([
        1,
        ...new Uint8Array(new Uint32Array([amount]).buffer),
      ]), // Instruction index 1 for create_wager
    })
  );

  return transaction
    .serialize({ requireAllSignatures: false })
    .toString("base64");
};

export const prepareJoinWagerTransaction = async (
  wagerId: string,
  participantPublicKey: string,
  amount: number
): Promise<string> => {
  const programId = new PublicKey(Configs.web3.solanaProgramId);
  const wagerAccount = new PublicKey(wagerId);
  const participant = new PublicKey(participantPublicKey);
  const { blockhash } = await web3Connection.getLatestBlockhash();

  const transaction = new Transaction({
    recentBlockhash: blockhash, // Set the recent blockhash
    feePayer: new PublicKey(participantPublicKey),
  }).add(
    new TransactionInstruction({
      programId,
      keys: [
        { pubkey: participant, isSigner: true, isWritable: true },
        { pubkey: wagerAccount, isSigner: false, isWritable: true },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
      ],
      data: Buffer.from([
        2,
        ...new Uint8Array(new Uint32Array([amount]).buffer),
      ]), // Instruction index 2 for add_participant
    })
  );

  return transaction
    .serialize({ requireAllSignatures: false })
    .toString("base64");
};

export const submitSignedTransaction = async (
  signedTransaction: string
): Promise<string> => {
  const transactionBuffer = Buffer.from(signedTransaction, "base64");
  const tx = await web3Connection.sendRawTransaction(transactionBuffer, {
    skipPreflight: false,
    preflightCommitment: "confirmed",
  });
  return tx;
};
