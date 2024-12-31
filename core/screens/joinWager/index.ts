export const joinWagerScreenContent = async ()=>{
    return `
    <body class="bg-black text-white min-h-screen flex flex-col">

    <!-- Main Content -->
    <main class="flex-grow flex items-center justify-center p-4">
        <div class="bg-zinc-900 p-8 rounded-xl max-w-md w-full border border-zinc-800">
            <h1 class="text-3xl font-bold mb-6 text-center text-decor-two">
                <span class="text-white">Join </span>
                <span class="text-primary glow">Wager</span>
            </h1>
            <div class="space-y-4">
                <div class="flex justify-between">
                    <span class="text-zinc-400">Game:</span>
                    <span class="text-white font-medium" id="gameInfo">Fortnite</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-zinc-400">Game Mode:</span>
                    <span class="text-white font-medium" id="gameModeInfo">1v1</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-zinc-400">Stake Amount:</span>
                    <span class="text-white font-medium" id="stakeAmountInfo">1.5 SOL</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-zinc-400">Creator's Wallet:</span>
                    <span class="text-white font-medium" id="creatorWalletInfo">3F...8A</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-zinc-400">Creator's Username:</span>
                    <span class="text-white font-medium" id="creatorUsernameInfo">ProGamer123</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-zinc-400">Expires in:</span>
                    <span class="text-white font-medium" id="expirationInfo">2h 30m</span>
                </div>
            </div>
            <div class="mt-8 space-y-4">
                <button id="participateBtn" class="w-full bg-primary text-black px-4 py-3 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all">
                    Participate in Wager
                </button>
                <button id="cancelBtn" class="w-full bg-zinc-800 text-white px-4 py-3 rounded-lg font-medium hover:bg-zinc-700 transition-all">
                    Cancel
                </button>
            </div>
        </div>
    </main>
    <!-- Modal for Successful Join -->
    <div id="successModal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center hidden z-50">
        <div class="bg-zinc-900 p-8 rounded-xl max-w-md w-full border border-zinc-800">
            <h2 class="text-2xl font-bold mb-4 text-center text-decor-two">
                <span class="text-white">Wager </span>
                <span class="text-primary glow">Joined!</span>
            </h2>
            <p class="text-zinc-400 mb-4 text-center">You have successfully joined the wager. Good luck!</p>
            <button id="closeModal" class="w-full bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all">
                Close
            </button>
        </div>
    </div>

    <script src="/javascripts/joinWager.js" type="module"></script>
    </body>
    `
}