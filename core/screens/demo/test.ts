export const demoScreenContent = () => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connect Phantom Wallet</title>
</head>
<body>
  <h1>Connect Phantom Wallet</h1>
  <button id="connectWalletButton">Connect Phantom Wallet</button>
  <p id="walletAddress">No wallet connected</p>

  <script>
    // Check if Phantom Wallet is installed
    if (window.solana && window.solana.isPhantom) {
      console.log("Phantom wallet is installed!");
    } else {
      console.log("Please install Phantom Wallet extension.");
    }

    // Handle connect wallet button click
    document.getElementById('connectWalletButton').addEventListener('click', async () => {
      try {
        // Request the user's wallet address
        const response = await window.solana.connect();
        const publicKey = response.publicKey.toString();

        // Display the wallet address on the page
        document.getElementById('walletAddress').innerText = \`Connected: \${publicKey}\`;
        
        // Send the public key to your backend (API) if necessary
        // For example, calling your endpoint:
        // const res = await fetch('/api/v1/web3/connect-wallet', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ publicKey })
        // });

        // Assuming the backend responds successfully:
        // const data = await res.json();
        // console.log('Backend response:', data);

      } catch (error) {
        console.error('Error connecting Phantom wallet:', error);
        alert('Failed to connect Phantom Wallet');
      }
    });
  </script>
</body>
</html>

  `;
};
