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

function navScrollLinkActive() {
  const scrollLength = window.scrollY;
  const heroSection = document.querySelector(".hero-section");
  const aboutSection = document.querySelector(".about-section");
  const servicesSection = document.querySelector(".services-section");
  const teamSection = document.querySelector(".team-section");
  const faqsSection = document.querySelector(".faqs-section");
  const contactSection = document.querySelector(".contact-section");

  const homeLink = document.querySelector(
    ".header-section nav .home-link-list"
  );
  const aboutLink = document.querySelector(
    ".header-section nav .about-link-list"
  );
  const servicesLink = document.querySelector(
    ".header-section nav .services-link-list"
  );
  const teamLink = document.querySelector(
    ".header-section nav .team-link-list"
  );
  const faqsLink = document.querySelector(
    ".header-section nav .faqs-link-list"
  );
  const contactLink = document.querySelector(
    ".header-section nav .contact-link-list"
  );

  if (scrollLength <= heroSection.offsetHeight) {
    homeLink.classList.add("active");
  } else {
    homeLink.classList.remove("active");
  }
}
