const hamburger = document.querySelector(".hamburger");
const menuLink = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
    menuLink.classList.toggle("active");
})