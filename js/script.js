const menu = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close menu ketika item diklik
document.querySelectorAll(".navbar-nav a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Update cart count on page load
window.addEventListener("load", () => {
  if (typeof updateCartCount === "function") {
    updateCartCount();
  }
});
