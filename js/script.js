const menu = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
