document.addEventListener('DOMContentLoaded', () => {
    includeHTML();

    // Initial animation trigger
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');

    for (let el of elements) {
        const file = el.getAttribute('data-include');
        if (file) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    el.innerHTML = await response.text();
                    el.removeAttribute('data-include');

                    // Re-initialize scripts for specific components
                    if (file.includes('header')) {
                        setupMobileMenu();
                        highlightActiveLink();
                    }
                } else {
                    el.innerHTML = 'Page not found.';
                }
            } catch (e) {
                console.error(`Error loading ${file}:`, e);
            }
        }
    }
}

function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.querySelector('.desktop-nav');
    if (btn && nav) {
        btn.onclick = function () {
            const isHidden = getComputedStyle(nav).display === 'none';
            if (isHidden) {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = '#fff';
                nav.style.padding = '1rem';
                nav.style.zIndex = '999';
                nav.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            } else {
                nav.style.display = ''; // Revert to CSS
            }
        };
    }
}

function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
            link.style.color = 'var(--color-primary)';
        }
    });
}
