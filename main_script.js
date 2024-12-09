//So the navbar opens and closes smoothly instead of jumping back and forth, reopening every time you move your mouse onto a different "hover zone" pixel

const navbar = document.querySelector('.navbar');
const hoverZone = document.querySelector('.hover-zone');
const arrowToggle = document.querySelector('.arrow-toggle');

let isNavbarOpen = false;

hoverZone.addEventListener('mouseenter', () => {
    navbar.classList.add('open');
    arrowToggle.classList.add('active');
    isNavbarOpen = true;
});

navbar.addEventListener('mouseleave', () => {
    navbar.classList.remove('open');
    arrowToggle.classList.remove('active');
    isNavbarOpen = false;
});

arrowToggle.addEventListener('click', () => {
    isNavbarOpen = !isNavbarOpen;
    if (isNavbarOpen) {
        navbar.classList.add('open');
        arrowToggle.classList.add('active');
    }
    else {
        navbar.classList.remove('open');
        arrowToggle.classList.remove('active');
    }
});