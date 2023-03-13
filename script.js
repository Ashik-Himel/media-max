const bar = document.querySelector(".header-section .fa-bars-staggered");
const cross = document.querySelector(".header-section .fa-xmark");
const navLink = document.querySelectorAll(".header-section nav a");
const navMenu = document.querySelector(".header-section nav");
const currentYear = document.querySelector("#current-year");

bar.addEventListener("click", function () {
  navMenu.classList.add("active");
});
cross.addEventListener("click", function () {
  navMenu.classList.remove("active");
});
navLink.forEach((n) =>
  n.addEventListener("click", function () {
    navMenu.classList.remove("active");
  })
);

function currentYearFunc() {
  const d = new Date();
  const d_year = d.getFullYear();
  currentYear.innerHTML = d_year;
}
currentYearFunc();
