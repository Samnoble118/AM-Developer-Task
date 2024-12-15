document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('theMobileNav');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
