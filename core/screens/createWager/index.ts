export const createWagerScreenContent = ()=>{
    return `
    <body class="bg-black min-h-screen">
        <!-- Main Content -->
        <main class="flex-grow flex items-center justify-center p-4 bg-image" id="backgroundImage">
            <div class="bg-black bg-opacity-70 p-8 rounded-xl backdrop-blur-md max-w-md w-full">
                <h1 class="text-3xl font-bold mb-6 text-center text-decor-two">
                    <span class="text-white">Create a </span>
                    <span class="text-primary glow">Wager</span>
                </h1>
                <form id="wagerForm" class="space-y-4">
                    <div>
                        <label for="game" class="block text-sm font-medium text-zinc-400 mb-1">Select Game</label>
                        <select id="game" name="game" required class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary">
                            <option value="">Choose a game</option>
                            <option value="LeagueOfLegends">League of Legends</option>
                            <option value="Fortnite">Fortnite</option>
                        </select>
                    </div>
                    <div>
                        <label for="gameMode" class="block text-sm font-medium text-zinc-400 mb-1">Game Mode</label>
                        <select id="gameMode" name="gameMode" required class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary">
                            <option value="">Select game mode</option>
                            <option value="1v1">1v1</option>
                            <option value="2v2">2v2</option>
                            <option value="5v5">5v5</option>
                        </select>
                    </div>
                    <div>
                        <label for="stakeAmount" class="block text-sm font-medium text-zinc-400 mb-1">Stake Amount (SOL)</label>
                        <input type="number" id="stakeAmount" name="stakeAmount" min="0.5" step="0.1" required class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary" placeholder="Min 0.5 SOL">
                    </div>
                    <div>
                        <label for="gameUsername" class="block text-sm font-medium text-zinc-400 mb-1">Game Username</label>
                        <input type="text" id="gameUsername" name="gameUsername" required class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary" placeholder="Your in-game username">
                    </div>
                    <div>
                        <label for="wagerDuration" class="block text-sm font-medium text-zinc-400 mb-1">Wager Duration</label>
                        <input type="datetime-local" id="wagerDuration" name="wagerDuration" required class="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary">
                    </div>
                    <button type="submit" class="w-full bg-primary text-black px-4 py-3 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all">
                        Confirm Wager
                    </button>
                </form>
            </div>
        </main>

        <!-- Modal for Wager Link -->
        <div id="wagerLinkModal" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center hidden z-50">
            <div class="bg-zinc-900 p-8 rounded-xl max-w-md w-full">
                <h2 class="text-2xl font-bold mb-4 text-center text-decor-two">
                    <span class="text-white">Wager </span>
                    <span class="text-primary glow">Created!</span>
                </h2>
                <p class="text-zinc-400 mb-4">Share this link with your opponent:</p>
                <div class="flex mb-4">
                    <input type="text" id="wagerLink" readonly class="flex-grow bg-zinc-800 border border-zinc-700 rounded-l-lg px-3 py-2 text-white focus:outline-none">
                    <button id="copyLink" class="bg-primary text-black px-4 py-2 rounded-r-lg font-medium hover:bg-opacity-90 btn-glow transition-all">
                        Copy
                    </button>
                </div>
                <button id="closeModal" class="w-full bg-zinc-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-zinc-700 transition-all">
                    Close
                </button>
            </div>
        </div>
        <script src="/javascripts/createWager.js" type="module"></script>
    <body>
    `
}