const bar = document.querySelector(".header-section .fa-bars-staggered");
const cross = document.querySelector(".header-section .fa-xmark");
const navMenu = document.querySelector(".header-section nav");

bar.addEventListener("click", function() {
  navMenu.classList.add("active");
})
cross.addEventListener("click", function() {
  navMenu.classList.remove("active");
})