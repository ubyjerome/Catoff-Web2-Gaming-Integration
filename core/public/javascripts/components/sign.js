import { call } from "./call.js";
// Use the global solanaWeb3 object instead of importing
const { Connection, Transaction, PublicKey } = window.solanaWeb3;

const SOLANA_NETWORK = "devnet";
const connection = new Connection(`https://api.${SOLANA_NETWORK}.solana.com`);

export async function signTransaction(transaction) {
    try {
        if (!window.solana) {
            throw new Error("No Solana Wallet Extensions Found");
        }

        await window.solana.connect();
        const provider = window.solana;

        transaction.feePayer = provider.publicKey;
        transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

        const signedTransaction = await provider.signTransaction(transaction);
        
        // Check if the signed transaction is a plain object or Base64 string
        let reconstructedTransaction;
        if (typeof signedTransaction === 'string') {
            // If signed transaction is a Base64 string, decode it into a Transaction object
            reconstructedTransaction = Transaction.from(Buffer.from(signedTransaction, "base64"));
        } else if (typeof signedTransaction === 'object') {
            // If it's already a plain object, reconstruct it directly
            console.log(signedTransaction)
            reconstructedTransaction = new Transaction(signedTransaction);
        } else {
            throw new Error("Unexpected format for signedTransaction");
        }

        console.log(reconstructedTransaction);
        return signedTransaction;
    } catch (error) {
        console.error("Error signing transaction:", error);
        throw error;
    }
}

export async function sendSignedTransaction(signedTransaction) {
    try {
        const signatureResponse = await call.json("/api/v1/web3/transaction/submit", "POST", true, { signedTransaction });
        if (!signatureResponse.success) {
            throw new Error(signatureResponse.message);
        }
        return signatureResponse.data.signature;
    } catch (error) {
        console.error("Error sending signed transaction:", error);
        throw error;
    }
}
