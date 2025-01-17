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
                }</a>${Configs.project.phase ? `<span class="text-sm text-gray-600">  ${Configs.project.phase}</span>`:""}</span>
            </div>
            <button class="bg-primary text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all connect-wallet text-nowrap" wallet-connection="false">
                    Connect Wallet
                    <i class="fa-solid fa-wallet ml-2"></i>
            </button>
        </div>
    </nav>
    `;
};
