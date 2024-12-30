import {
    toast
} from "/javascripts/components/toast.js"
import {
    call
} from "/javascripts/components/call.js"

export function init() {}
const walletConnectionButton = document.querySelectorAll('.connect-wallet')

// Wallet Connection Simulation
walletConnectionButton.forEach(button => {
    button.addEventListener('click', async () => {

        const walletConnection = button.getAttribute("wallet-connection")
        if (walletConnection === "true") {
            window.location.href = "/games"
            return
        }

        try {
            if (window.solana) {
                const response = await window.solana.connect();
                const publicKey = response.publicKey.toString();

                // const connectionResponse = await sendPublicKeyToBackend(publicKey);
                // if (!connectionResponse.status) {
                //     toast(connectionResponse.message, "error")
                //     return
                // }
                // toast(connectionResponse.message, "info")
                
                walletConnectionButton.forEach(button => {
                    button.setAttribute("wallet-connection", true)
                    button.innerHTML = `Connected: 7C...3F`
                })

            } else {
                toast("No Solana wallet extension detected. Please install a wallet like Phantom, Sollet, or Solflare.", "error")
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
            toast("Failed to connect to the wallet. Please try again.", "error")
        }
    });
});


async function sendPublicKeyToBackend(userPublicKey) {
    const connectionResponse = await call.json("/api/v1/web3/connect-wallet", "POST", false, {
        userPublicKey: userPublicKey.toString()
    });
    return connectionResponse
}