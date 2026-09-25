const menuToggleBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuCloseBtn = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(
  ".mobile-nav-link, .mobile-contacts-link",
);

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = "";
}

menuToggleBtn.addEventListener("click", openMobileMenu);
mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
    closeMobileMenu();
  }
});
