document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('theNav');
    const navButton = document.getElementById('navButton');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        navButton.classList.toggle('hide');
    });
});
