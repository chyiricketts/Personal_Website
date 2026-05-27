const toggle = document.getElementById("nav-toggle");
const navList = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  toggle.classList.toggle("active");
});


const navToggle = document.getElementById("nav-toggle");
const navLeft = document.querySelector(".nav-left");

navToggle.addEventListener("click", () => {
    navLeft.classList.toggle("active");
});