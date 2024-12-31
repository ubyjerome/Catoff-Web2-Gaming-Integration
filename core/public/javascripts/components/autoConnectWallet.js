import {
    shortenPublicKey
} from "/javascripts/components/shortenPubKey.js"
import {
    toast
} from "/javascripts/components/toast.js"

const walletConnectionButton = document.querySelectorAll('.connect-wallet')
export async function autoConnect() {
    try {
        if (!window.solana) {
            toast("No Solana Extensions Detected", "error")
            throw new Error("No Solana Extensions Detected");
        }
        await window.solana.connect();
        const userPublicKey = window.solana.publicKey.toString();
        walletConnectionButton.forEach(button => {
            button.innerHTML = `${shortenPublicKey(userPublicKey)} <i class="fa-brands fa-connectdevelop"></i>`
            button.setAttribute("wallet-connection", true)
        })
    } catch (error) {
        console.error(error)
        toast("Could not connect wallet", "error")
    }

}