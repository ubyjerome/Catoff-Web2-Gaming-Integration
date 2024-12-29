// Wallet Connection Simulation
document.querySelectorAll('.connect-wallet').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent.toLowerCase().includes('wallet')) {
            alert('Wallet Connection Failure');
        }
    });
});

// Hover Effects
document.querySelectorAll('.btn-glow').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});