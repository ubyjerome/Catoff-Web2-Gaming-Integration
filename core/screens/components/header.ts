import { text } from "express";
import { Configs } from "../../configs";
import { SVGTicket } from "../ASSETS/ticket.svg";

export const header = (walletConnection?: boolean) => {
  return `
      <nav class="border-b border-zinc-800">
        <div class="container mx-auto px-4 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="text-primary font-bold text-xl text-decor-two">${
                  Configs.organisation.name
                }</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="/games" class="text-zinc-400 hover:text-white transition-colors">Games</a>
                <button id="connectWallet" class="bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all">
                    ${walletConnection ? "Wagers" : "Connect Wallet"}
                </button>
            </div>
        </div>
    </nav>
    `;
};
