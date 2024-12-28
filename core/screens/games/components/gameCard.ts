export const gameCard = (gameName:string, featuredText:string, activeWagers:number,featuredImage?:string) => {
  return `
      <!-- ${gameName} Card -->
            <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
                <img src="${featuredImage?featuredImage:`https://via.placeholder.com/800x400?text=${gameName}`}" alt="${gameName}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h2 class="text-2xl font-bold mb-2 text-primary">${gameName}</h2>
                    <p class="text-zinc-400 mb-4">${featuredText}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-primary font-bold">Active Wagers: <span id="fortniteWagers">${activeWagers}</span></span>
                        <button class="bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all">
                            Create Wager
                        </button>
                    </div>
                </div>
            </div>
  `;
};
