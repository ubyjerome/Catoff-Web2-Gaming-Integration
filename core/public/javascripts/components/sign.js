// Use the global solanaWeb3 object instead of importing
const { Connection, Transaction, PublicKey } = window.solanaWeb3;

const SOLANA_NETWORK = "devnet";
const connection = new Connection(`https://api.${SOLANA_NETWORK}.solana.com`);

export async function signTransaction(transaction) {
    try {
        if (!window.solana || !window.solana.isPhantom) {
            throw new Error("Phantom wallet is not installed");
        }

        await window.solana.connect();
        const provider = window.solana;

        transaction.feePayer = provider.publicKey;
        transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

        const signedTransaction = await provider.signTransaction(transaction);
        return signedTransaction;
    } catch (error) {
        console.error("Error signing transaction:", error);
        throw error;
    }
}

export async function sendSignedTransaction(signedTransaction) {
    try {
        const signature = await connection.sendRawTransaction(signedTransaction.serialize());
        await connection.confirmTransaction(signature);
        return signature;
    } catch (error) {
        console.error("Error sending signed transaction:", error);
        throw error;
    }
}

