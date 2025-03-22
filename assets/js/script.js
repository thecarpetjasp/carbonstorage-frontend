// START OF PARTICLES JS INIT
document.addEventListener("DOMContentLoaded", function () {
    let configFile = window.innerWidth > 768 ? "assets/js/particles-config.json" : "assets/js/particles-config-mobile.json";

    particlesJS.load("particles-js", configFile, function () {
        console.log("Particles.js loaded successfully!");
    });
});
// END OF PARTICLES JS INIT


// START OF MOBILE NAVIGATION CONFIGURATIONS
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
// END OF MOBILE NAVIGATION CONFIGURATIONS


// START OF GRAPH INIT
function createBarChart(canvasId, labelName, labels, data, bgColor) {
    const ctx = document.getElementById(canvasId);
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: labels,
        datasets: [{
            label: labelName,
            data: data,
            borderWidth: 1,
            backgroundColor: bgColor,
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });
}

createBarChart('chart1', 'Acres', ['Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Jan 2025'], [0.516, 0.694, 1.242, 18.639, 28.753, 35.678], '#006eff');
createBarChart('chart2', 'Capacity', ['Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Jan 2025'], [196.57, 362.6, 629.55, 1944.281, 3718.083, 4893.785], '#53db5a');
createBarChart('chart3', 'Injection', ['Jan 2020', 'Jan 2021', 'Jan 2022', 'Jan 2023', 'Jan 2024', 'Jan 2025'], [18.915, 26.336, 39.444, 103.456, 237.018, 422.518], 'oklch(0.905 0.182 98.111)');
// END OF GRAPH INIT


// START OF RELLAX INIT
var rellax = new Rellax('.rellax');
// END OF RELLAX INIT