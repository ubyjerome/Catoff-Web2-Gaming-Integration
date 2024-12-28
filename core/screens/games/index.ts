import { gameCard } from "./components/gameCard";

export const gamesScreenContent = async () => {
  return `
    <body class="bg-black min-h-screen">
    <!-- Games Section -->
    <section class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-8 text-decor-two">
            <span class="text-white">Available </span>
            <span class="text-primary glow">Games</span>
        </h1>
        
        <div class="grid md:grid-cols-2 gap-8">

            ${gameCard(
              "Fortnite",
              "Create or join wagers for Fortnite matches. Compete in solo, duo, or squad games.",
              23,
              `https://res.cloudinary.com/dlh6rxgpl/image/upload/w_800,h_200,c_fill,q_200/fortnite_banner.jpg`
            )}

            ${gameCard(
              "League of Legends",
              "Wager on LoL matches. Available for solo queue, flex, and custom games.",
              14,
              `https://res.cloudinary.com/dlh6rxgpl/image/upload/w_800,h_200,c_fill,q_200/lol_banner.jpg`
            )}

        </div>
    </section>

    <!-- Active Wagers Section -->
    <section class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold mb-8 text-decor-two">
            <span class="text-white">Past </span>
            <span class="text-primary glow">Wagers</span>
        </h2>
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-zinc-800">
                        <th class="p-4 font-bold">Game</th>
                        <th class="p-4 font-bold">Type</th>
                        <th class="p-4 font-bold">Wager Amount</th>
                        <th class="p-4 font-bold">Players</th>
                    </tr>
                </thead>
                <tbody id="wagersList">
                    <!-- Wagers will be dynamically inserted here -->
                </tbody>
            </table>
        </div>
    </section>
    <script src="/javascripts/games.js" type="module"></script>
    </body>
    `;
};
