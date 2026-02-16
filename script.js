document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 80);
  });

});
