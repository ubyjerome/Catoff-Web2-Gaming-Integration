import { text } from "express";
import { Configs } from "../../configs";
import { SVGTicket } from "../ASSETS/ticket.svg";
import { SVGCreditCard } from "../ASSETS/creditCard.svg";

export const header = (walletConnection?: boolean) => {
  return `
      <nav class="border-b border-zinc-800">
        <div class="container mx-auto px-4 min-h-16 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="text-primary font-bold text-xl text-decor-two"><a href="/">${
                  Configs.organisation.name
                }</a></span>
            </div>
            <div class="flex items-center gap-4">
                <button class="bg-primary text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all flex items-center my-4 flex-nowrap connect-wallet">
                        Connect Wallet
                    ${SVGCreditCard("h-5 w-5 ml-2")}
                </button>
            </div>
        </div>
    </nav>
    `;
};
