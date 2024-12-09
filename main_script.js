//So the navbar opens and closes smoothly instead of jumping back and forth, reopening every time you move your mouse onto a different "hover zone" pixel

const navbar = document.querySelector('.navbar');
const hoverZone = document.querySelector('.hover-zone');

hoverZone.addEventListener('mouseenter', () => {
    navbar.classList.add('open');
});

navbar.addEventListener('mouseleave', () => {
    navbar.classList.remove('open');
});
