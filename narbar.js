const navToggle = document.getElementById("nav-toggle");
const navLeft = document.querySelector(".nav-left");

navToggle.addEventListener("click", () => {
    navLeft.classList.toggle("active");
});