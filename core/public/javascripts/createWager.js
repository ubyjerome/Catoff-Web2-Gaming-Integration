import {
    init
} from "/javascripts/global.js";
import {
    toast
} from "/javascripts/components/toast.js";
import {
    call
} from "/javascripts/components/call.js";
import {
    signTransaction,
    sendSignedTransaction
} from "/javascripts/components/sign.js";
import {
    shortenPublicKey
} from "/javascripts/components/shortenPubKey.js"

// Use the global solanaWeb3 object
const {
    Transaction,
    PublicKey
} = window.solanaWeb3;


init();

const wagerForm = document.getElementById('wagerForm');
const linkInput = document.getElementById('wagerLink');
const wagerLinkModal = document.getElementById('wagerLinkModal');
const copyLinkButton = document.getElementById('copyLink');
const closeModalButton = document.getElementById('closeModal');
const wagerDurationInput = document.getElementById('wagerDuration');
const walletConnectionButton = document.querySelectorAll('.connect-wallet')

// Set minimum date for wager duration
const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
wagerDurationInput.min = now.toISOString().slice(0, 16);

wagerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(wagerForm);
    const wagerData = {
        game: formData.get('game'),
        gameMode: formData.get('gameMode'),
        stakeAmount: parseFloat(formData.get('stakeAmount')),
        gameUsername: formData.get('gameUsername'),
        wagerDuration: formData.get('wagerDuration')
    };

    try {
        // Ensure wallet is connected
        if (!window.solana || !window.solana.isPhantom) {
            throw new Error("Phantom wallet is not connected");
        }
        await window.solana.connect();
        const userPublicKey = window.solana.publicKey.toString();
        walletConnectionButton.forEach(button => {
            button.innerHTML = `Connected ${shortenPublicKey(userPublicKey)}`
        })
        // Step 1: Prepare the transaction
        const prepareResponse = await call.json('/api/v1/web3/wager/create', "POST", false, {
            ...wagerData,
            creatorPublicKey: userPublicKey
        })
        console.log(wagerData)
        console.log(prepareResponse)
        if (!prepareResponse.success) {
            throw new Error('Failed to prepare transaction');
        }

        const {
            transaction: serializedTransaction
        } = await prepareResponse.json();

        // Step 2: Deserialize and sign the transaction
        const transaction = Transaction.from(Buffer.from(serializedTransaction, 'base64'));
        const signedTransaction = await signTransaction(transaction);

        // Step 3: Submit the signed transaction
        const signature = await sendSignedTransaction(signedTransaction);

        // Generate wager link
        const wagerId = generateWagerId(signature);
        const wagerLink = `https://wagerly.com/wager/join/${wagerId}`;

        // Show wager link modal
        linkInput.value = wagerLink;
        wagerLinkModal.classList.remove('hidden');

        toast("Wager created successfully!", "success");
    } catch (error) {
        console.error('Error creating wager:', error);
        toast(error.message || "Failed to create wager. Please try again.", "error");
    }
});

copyLinkButton.addEventListener('click', () => {
    linkInput.select();
    document.execCommand('copy');
    toast("Wager link copied to clipboard!", "info");
});

closeModalButton.addEventListener('click', () => {
    wagerLinkModal.classList.add('hidden');
});

// Helper function to generate a wager ID from the transaction signature
function generateWagerId(signature) {
    return signature.slice(0, 8);
}