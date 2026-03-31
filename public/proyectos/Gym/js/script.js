// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Prevent default jump when page loads with hash
    if(window.location.hash) {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 1);
    }

    // Reveal Animations using IntersectionObserver
    const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } // optional: else { entry.target.classList.remove('active') } 
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((reveal) => {
        observer.observe(reveal);
    });

    // Page Loader Hide logic
    const loader = document.getElementById("page-loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 400); 
    }

    // Set Active Link Based on Current URL
    const pathname = window.location.pathname;
    // Extract filename (like index.html or membresias.html)
    let currentPath = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (!currentPath) currentPath = "index.html"; // fallback for root

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("text-[#2E5BFF]"); // Active state color
            link.classList.remove("text-[#8E90A2]");
        }
    });

    // Page Transition for all internal links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetUrl = this.getAttribute("href");

            // Ignore external links, mailto, etc.
            if (!targetUrl || targetUrl.startsWith("http") || targetUrl.startsWith("#")) {
                return; // Let default behavior happen
            }

            // Same page check
            if (targetUrl === currentPath) {
                return; // Do nothing or scroll to top
            }

            e.preventDefault();
            if (loader) {
                // Bring loader down
                loader.classList.remove("hide");
                loader.classList.add("show");
                
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 700);
            } else {
                window.location.href = targetUrl;
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("translate-x-full");
            mobileMenu.classList.add("translate-x-0");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });

        closeMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("translate-x-0");
            mobileMenu.classList.add("translate-x-full");
            document.body.style.overflow = ""; // Restore scrolling
        });
    }
});
