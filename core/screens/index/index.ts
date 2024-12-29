import { Configs } from "../../configs";
import { zincCard } from "./components/card";
import { SVGCreditCard } from "../ASSETS/creditCard.svg";
import { SVGShield } from "../ASSETS/shield.svg";
import { SVGTicket} from "../ASSETS/ticket.svg";
import { SVGForwardArrow } from "../ASSETS/forwardArrow.svg";

export const homeScreenContent = async () => {
  return `
<body class="bg-black min-h-screen">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-20">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
                <h1 class="text-5xl lg:text-7xl font-bold text-decor-two" data-aos="fade-down" data-aos-duration="1000">
                    <span class="text-white">The Ultimate </span>
                    <span class="text-primary glow">Web3 P2P</span>
                    <span class="text-white"> Wagering Platform</span>
                </h1>
                <p class="text-zinc-400 tcenterext-xl">
                    Create or join wagers for popular games like Fortnite and League of Legends using
                    cryptocurrencies on the Solana blockchain.
                </p>
                <div class="flex gap-4 items-start justify-start flex-wrap">
                    <button class="bg-primary text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all connect-wallet text-nowrap">
                        Connect Wallet
                        <i class="fa-solid fa-wallet ml-2"></i>
                    </button>
                    <a href="/games" class="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-all flex items-center">
                        See Games ${SVGForwardArrow("h-5 w-5 ml-2")}
                    </a>
                </div>
            </div>
            <div class="relative">
                <div class="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10"></div>
                <blockquote class="twitter-tweet z-10" data-theme="dark"><p lang="en" dir="ltr"></p>&mdash;<a href="https://twitter.com/ubyjerome/status/1873076379543368105?ref_src=twsrc%5Etfw"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>                
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold text-center mb-12 text-decor-two">
            <span class="text-white">Why Choose </span>
            <span class="text-primary glow">${Configs.organisation.name}</span>
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
    
                ${zincCard(`
                ${SVGShield("h-12 w-12 text-primary mb-4")}
                    <h3 class="text-xl font-bold text-white mb-2">Secure Smart Contracts</h3>
                    <p class="text-zinc-400">
                        All wagers are secured by blockchain technology and smart contract escrows.
                    </p>
                `,'','data-aos="fade-up"')}

                ${zincCard(`
                ${SVGTicket("h-12 w-12 text-primary mb-4")}
                    <h3 class="text-xl font-bold text-white mb-2">Popular Games</h3>
                    <p class="text-zinc-400">
                        Support for major titles like Fortnite and League of Legends.
                    </p>
                    `,'','data-aos="fade-up"')}

                ${zincCard(`
                    ${SVGCreditCard("h-12 w-12 text-primary mb-4")}
                    <h3 class="text-xl font-bold text-white mb-2">Instant Payouts</h3>
                    <p class="text-zinc-400">
                        Receive your winnings instantly through Solana blockchain transactions.
                    </p>
                `,'','data-aos="fade-up"')}
        </div>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto px-4 py-20">
    ${zincCard(`
        <h2 class="text-3xl font-bold mb-4 text-decor-two">
                <span class="text-white">Ready to </span>
                <span class="text-primary glow">Start Wagering?</span>
            </h2>
            <p class="text-zinc-400 mb-8 text-lg">
                Join thousands of players already using Wagerly to enhance their gaming experience.
            </p>
            <button class="bg-primary text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 btn-glow transition-all flex items-center mx-auto connect-wallet">
                Connect Wallet & Start Playing
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
    `,'rounded-2xl p-12 text-center max-w-4xl mx-auto','data-aos="fade-up"')}
    </section>
    
    <script src="/javascripts/index.js" type="module"></script>
    </body>
    `
    ;
};

