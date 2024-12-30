import {init} from "/javascripts/global.js"
import{toast}from"/javascripts/components/toast.js"

// const gameBackgrounds = {
//     LeagueOfLegends: 'https://picsum.photos/id/237/1920/1080',
//     Fortnite: 'https://picsum.photos/id/238/1920/1080'
// };

const linkInput = document.getElementById('wagerLink');

// document.getElementById('game').addEventListener('change', (e) => {
//     const backgroundImage = document.getElementById('backgroundImage');
//     backgroundImage.style.backgroundImage = `url(${gameBackgrounds[e.target.value]})`;
// });

document.getElementById('wagerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Simulate transaction signing
    
    // Simulate transaction confirmation
    
    // Show wager link modal
    document.getElementById('wagerLinkModal').classList.remove('hidden');
    linkInput.value = `https://wagerly.com/wager/join/abc123`
});

document.getElementById('copyLink').addEventListener('click', () => {

    linkInput.select();
    document.execCommand('copy');
    toast("Wager link copied to clipboard!","info")
});

document.getElementById('closeModal').addEventListener('click', () => {
    // linkInput.setAttribute("value", `https://wagerly.com/wager/join/abc123`)
    document.getElementById('wagerLinkModal').classList.add('hidden');
});

// Set minimum date for wager duration
const wagerDurationInput = document.getElementById('wagerDuration');
const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
wagerDurationInput.min = now.toISOString().slice(0, 16);
