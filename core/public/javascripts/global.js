export function init(){}

// Wallet Connection Simulation
document.querySelectorAll('.connect-wallet').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent.toLowerCase().includes('wallet')) {
            alert('Wallet Connection Failed');
        }
    });
});