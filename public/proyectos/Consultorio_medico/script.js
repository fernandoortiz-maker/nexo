document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu logic
    const menuBtn = document.getElementById("menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a, button") : [];

    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("flex");
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        });
    }

    if(closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
            document.body.style.overflow = "";
        });
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
            document.body.style.overflow = "";
        });
    });
});
