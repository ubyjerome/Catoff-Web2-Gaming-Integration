import { Configs } from "../../configs";
import { ImageCloud } from "../../services/cloudinary";

export const footer = async () => {
  return `
        <footer class="border-t border-zinc-800 py-6">
        <div class="container mx-auto px-4 text-center text-zinc-400">
            <p>© 2024 ${Configs.organisation.name}. All rights reserved.</p>
        </div>
    </footer>>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        AOS.init();
      });
    </script>

    `;
};
