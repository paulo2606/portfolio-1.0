document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('header nav');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active'); // Alterna a classe 'active' no nav
        mobileMenu.classList.toggle('active'); // Alterna a classe 'active' no menu hamburguer
    });
});
