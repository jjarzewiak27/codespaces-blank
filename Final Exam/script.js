// Select the hamburger button and the navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

// Toggle the "open" class on click
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
