import {init} from "/javascripts/global.js"
// Simulated data for active wagers
const activeWagers = [{
        game: 'Fortnite',
        type: 'Solo',
        amount: '0.1 SOL',
        players: '2/2'
    },
    {
        game: 'League of Legends',
        type: '5v5',
        amount: '0.5 SOL',
        players: '2/2'
    },
    {
        game: 'Fortnite',
        type: 'Duo',
        amount: '0.2 SOL',
        players: '2/2'
    },
    {
        game: 'League of Legends',
        type: 'Solo Queue',
        amount: '0.3 SOL',
        players: '2/2'
    },
];
// Populate active wagers table
function populateWagers() {
    const wagersList = document.getElementById('wagersList');
    wagersList.innerHTML = activeWagers.map(wager => `
        <tr class="border-b border-zinc-800 hover:bg-zinc-900/50">
            <td class="p-4 text-white">${wager.game}</td>
            <td class="p-4 text-white">${wager.type}</td>
            <td class="p-4 text-white">${wager.amount}</td>
            <td class="p-4 text-white">${wager.players}</td>
        </tr>
    `).join('');
}
// Create Wager Simulation
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.trim() === 'Create Wager') {
        button.addEventListener('click', () => {
            window.location.href="/wager/create"
        });
    }
});
populateWagers()