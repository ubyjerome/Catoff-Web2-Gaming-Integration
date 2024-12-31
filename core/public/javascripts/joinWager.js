// Simulated wager data
const wagerData = {
    game: "Fortnite",
    gameMode: "1v1",
    stakeAmount: 1.5,
    creatorWallet: "3F...8A",
    creatorUsername: "ProGamer123",
    expirationTime: new Date(Date.now() + 2.5 * 60 * 60 * 1000) // 2.5 hours from now
};

// Update wager information
document.getElementById('gameInfo').textContent = wagerData.game;
document.getElementById('gameModeInfo').textContent = wagerData.gameMode;
document.getElementById('stakeAmountInfo').textContent = `${wagerData.stakeAmount} SOL`;
document.getElementById('creatorWalletInfo').textContent = wagerData.creatorWallet;
document.getElementById('creatorUsernameInfo').textContent = wagerData.creatorUsername;

// Update expiration time
function updateExpirationTime() {
    const now = new Date();
    const timeLeft = wagerData.expirationTime - now;
    if (timeLeft > 0) {
        const hours = Math.floor(timeLeft / (60 * 60 * 1000));
        const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
        document.getElementById('expirationInfo').textContent = `${hours}h ${minutes}m`;
    } else {
        document.getElementById('expirationInfo').textContent = "Expired";
        document.getElementById('participateBtn').disabled = true;
        document.getElementById('participateBtn').classList.add('opacity-50', 'cursor-not-allowed');
    }
}

updateExpirationTime();
setInterval(updateExpirationTime, 60000); 

// Participate button click handler
document.getElementById('participateBtn').addEventListener('click', async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert(`Please sign the transaction in your solana wallet to stake ${wagerData.stakeAmount} SOL.`);
    
    // Simulate transaction confirmation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success modal
    document.getElementById('successModal').classList.remove('hidden');
});

// Cancel button click handler
document.getElementById('cancelBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to cancel joining this wager?')) {
        window.location.href = '/';
    }
});

// Close modal button click handler
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('successModal').classList.add('hidden');
    window.location.href = '/';
});