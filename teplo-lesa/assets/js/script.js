const navMenu = document.querySelector("#navMenu");
const navToggle = document.querySelector("#navToggle");

if (navMenu && navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu-show");
  });
}
