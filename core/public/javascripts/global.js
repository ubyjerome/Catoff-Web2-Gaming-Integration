import {
    toast
} from "/javascripts/components/toast.js"

import {
    shortenPublicKey
} from "/javascripts/components/shortenPubKey.js"
import { autoConnect } from "/javascripts/components/autoConnectWallet.js";
await autoConnect();
export function init() {}
const walletConnectionButton = document.querySelectorAll('.connect-wallet')

// Wallet Connection Simulation
walletConnectionButton.forEach(button => {
    button.addEventListener('click', async (e) => {
        const targetButton = e.target
        const preservedButtonState = targetButton.innerHTML
        const walletConnection = button.getAttribute("wallet-connection")
        if (walletConnection === "true") {
            window.location.href = "/games"
            return
        }
        try {
            targetButton.innerHTML = `Connecting... <i class="fa-solid fa-link ml-2"></i>`
            if (window.solana) {
                const response = await window.solana.connect();
                const publicKey = response.publicKey.toString();

                walletConnectionButton.forEach(button => {
                    button.setAttribute("wallet-connection", true)
                    button.innerHTML = `${shortenPublicKey(publicKey)} <i class="fa-brands fa-connectdevelop"></i>`
                })

            } else {
                targetButton.innerHTML = preservedButtonState
                toast("No Solana wallet extension detected. Please install a wallet like Phantom, Sollet, or Solflare.", "error")
            }
        } catch (error) {
            targetButton.innerHTML = preservedButtonState
            console.error('Error connecting to wallet:', error);
            toast("Failed to connect to the wallet. Please try again.", "error")
        }
    });
});
