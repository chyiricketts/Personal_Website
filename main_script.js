// Select elements
const navbar = document.querySelector('.navbar');
const hoverZone = document.querySelector('.hover-zone');

// Event listeners
hoverZone.addEventListener('mouseenter', () => {
    navbar.classList.add('open'); // Show navbar when hovering over hover-zone
});

navbar.addEventListener('mouseleave', () => {
    navbar.classList.remove('open'); // Hide navbar when leaving the navbar
});
