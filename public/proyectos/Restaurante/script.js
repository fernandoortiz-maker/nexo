document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu logic
    const menuBtn = document.getElementById("menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("flex");
        });
    }

    if(closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("flex");
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
});
