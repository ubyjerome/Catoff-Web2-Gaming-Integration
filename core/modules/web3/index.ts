import { Configs } from "../../configs";
import logger from "../../utils/logger";
import { 
  Keypair, 
  Connection, 
  clusterApiUrl, 
  Transaction, 
  SystemProgram, 
  PublicKey, 
  TransactionInstruction 
} from "@solana/web3.js";

// Initialize a Solana connection
export const web3Network = Configs.web3.solanaNetwork as 'mainnet-beta' | 'devnet' | 'testnet';
export const web3Connection = new Connection(clusterApiUrl(web3Network), "confirmed");

// Create Keypair from the private key stored in Configs
export const solanaAccountKeypair = Keypair.fromSecretKey(Uint8Array.from(Configs.web3.privateKeyArray));

export const initializeWeb3 = async (): Promise<void> => {
  try {
    logger.info(`Solana Account Public Key: ${solanaAccountKeypair.publicKey.toString()}`);
    const balance = (await web3Connection.getBalance(solanaAccountKeypair.publicKey) / 1e9);
    logger.info(`Wallet Balance: ${balance} SOL`); 
  } catch (error) {
    logger.error(`Failed to initialize web3: ${error}`);
    process.exit(1);
  }
};

export const connectWallet = async (userPublicKey: string): Promise<string> => {
  const programId = new PublicKey(Configs.web3.solanaProgramId);
  const transaction = new Transaction().add(
    new TransactionInstruction({
      programId,
      keys: [
        { pubkey: new PublicKey(userPublicKey), isSigner: true, isWritable: false },
      ],
      data: Buffer.from([3]), // Custom data to indicate a "login" transaction
    })
  );

  try {
    const tx = await web3Connection.sendTransaction(transaction, [solanaAccountKeypair], { skipPreflight: false, preflightCommitment: 'confirmed' });
    logger.info(`Wallet connected with transaction ID: ${tx}`);
    return tx;
  } catch (error) {
    logger.error(`Error connecting wallet: ${error}`);
    throw new Error("Failed to connect wallet");
  }
};

export const prepareCreateWagerTransaction = (amount: number, creatorPublicKey: string): string => {
  const creator = new PublicKey(creatorPublicKey);
  const wagerAccount = Keypair.generate();
  const programId = new PublicKey(Configs.web3.solanaProgramId);

  const transaction = new Transaction().add(
    new TransactionInstruction({
      keys: [
        { pubkey: creator, isSigner: true, isWritable: true },
        { pubkey: wagerAccount.publicKey, isSigner: false, isWritable: true },
      ],
      programId,
      data: Buffer.from([0, ...new Uint8Array(new Uint32Array([amount]).buffer)]),
    })
  );

  return transaction.serialize({ requireAllSignatures: false }).toString("base64");
};

export const prepareJoinWagerTransaction = (wagerId: string, participantPublicKey: string, amount: number): string => {
  const wagerAccount = new PublicKey(wagerId);
  const participant = new PublicKey(participantPublicKey);
  const programId = new PublicKey(Configs.web3.solanaProgramId);

  const transaction = new Transaction().add(
    new TransactionInstruction({
      keys: [
        { pubkey: participant, isSigner: true, isWritable: true },
        { pubkey: wagerAccount, isSigner: false, isWritable: true },
      ],
      programId,
      data: Buffer.from([1, ...participant.toBuffer(), ...new Uint8Array(new Uint32Array([amount]).buffer)]),
    })
  );

  return transaction.serialize({ requireAllSignatures: false }).toString("base64");
};

export const chooseWinner = async (wagerId: string, winnerPublicKey: string): Promise<string> => {
  const programId = new PublicKey(Configs.web3.solanaProgramId);
  const wagerAccount = new PublicKey(wagerId);

  const wagerBalance = await web3Connection.getBalance(wagerAccount);
  if (wagerBalance === 0) {
    throw new Error("The wager account has no funds to resolve the wager");
  }

  const transaction = new Transaction().add(
    new TransactionInstruction({
      programId,
      keys: [
        { pubkey: solanaAccountKeypair.publicKey, isSigner: true, isWritable: false },
        { pubkey: wagerAccount, isSigner: false, isWritable: true },
        { pubkey: new PublicKey(winnerPublicKey), isSigner: false, isWritable: true },
      ],
      data: Buffer.from([2, ...new PublicKey(winnerPublicKey).toBuffer()]),
    })
  );

  try {
    const tx = await web3Connection.sendTransaction(transaction, [solanaAccountKeypair], { skipPreflight: false, preflightCommitment: 'confirmed' });
    logger.info(`Wager resolved. Winner: ${winnerPublicKey} with transaction ID: ${tx}`);
    return tx;
  } catch (error) {
    logger.error(`Error resolving wager: ${error}`);
    throw new Error("Failed to resolve wager");
  }
};

export const submitSignedTransaction = async (signedTransaction: string): Promise<string> => {
  try {
    const transactionBuffer = Buffer.from(signedTransaction, "base64");
    const txSignature = await web3Connection.sendRawTransaction(transactionBuffer, {
      skipPreflight: false,
      preflightCommitment: "confirmed",
    });
    return txSignature;
  } catch (error) {
    logger.error(`Error submitting transaction: ${error}`);
    throw new Error("Failed to submit transaction");
  }
};