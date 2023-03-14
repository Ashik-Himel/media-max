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

function scrollToTop() {
  const scrollTopIcon = document.querySelector(".scroll-to-top");
  const scrollLength = window.scrollY;
  if (scrollLength >= 200) {
    scrollTopIcon.classList.add("active");
  } else {
    scrollTopIcon.classList.remove("active");
  }
  console.log(scrollLength);
}
window.addEventListener("scroll", scrollToTop);

// Animation JS
function randomValues() {
  anime({
    targets: ".square, .circle, .triangle",
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-300, 300);
    },
    rotate: function () {
      return anime.random(0, 360);
    },
    scale: function () {
      return anime.random(0.2, 2);
    },
    duration: 2000,
    easing: "easeInOutQuad",
    complete: randomValues,
  });
}
randomValues();

// AOS Animation
AOS.init({
  duration: 1000,
})