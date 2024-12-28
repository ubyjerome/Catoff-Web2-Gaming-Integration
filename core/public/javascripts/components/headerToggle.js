const header = document.getElementById('header');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const headerCTA = document.querySelector(".header-cta")

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('bg-white', 'shadow-md');
        header.classList.remove('bg-transparent');
        document.querySelectorAll('#header nav a, #header nav svg, #header nav .nav-text').forEach(el => {
            el.classList.remove('text-white');
            el.classList.add('text-primary');
        });
    } else {
        header.classList.remove('bg-white', 'shadow-md');
        header.classList.add('bg-transparent');
        document.querySelectorAll('#header nav a, #header nav svg, #header nav .nav-text').forEach(el => {
            el.classList.add('text-white');
            el.classList.remove('text-black');
        });
    }
});

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    setTimeout(() => {
        mobileMenu.classList.toggle('opacity-0');
    }, 0);
    document.body.classList.toggle('overflow-hidden');
});