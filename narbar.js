const toggle = document.getElementById("nav-toggle");
const navList = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  toggle.classList.toggle("active");
});