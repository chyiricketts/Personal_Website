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






//GET RID OF THIS IF IT DOESN'T DO ANYTHING
//IS SUPPOSED TO BE FOR SMOOTH SCROLLING
// Select all links with hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const target = document.querySelector(this.getAttribute('href'));

        // Smoothly scroll to the target
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Align at the top of the viewport
        });
    });
});