document.addEventListener("DOMContentLoaded", function () {
    particlesJS.load("particles-js", "assets/js/particles-config.json", function () {
        console.log("Particles.js loaded successfully!");
    });
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('menu-open');
    mobileMenu.classList.toggle('menu-active');
    document.querySelector('body').classList.toggle('no-scroll')
})

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('open-dropdown');
    })
})