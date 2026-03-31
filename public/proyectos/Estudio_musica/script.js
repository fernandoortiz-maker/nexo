document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('main-header');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            // Icon toggle
            const icon = mobileMenuBtn.querySelector('span');
            if (mobileMenu.classList.contains('hidden')) {
                icon.textContent = 'menu';
                header.classList.remove('bg-[#0e0e0e]');
                header.classList.add('bg-[#0e0e0e]/60');
            } else {
                icon.textContent = 'close';
                header.classList.remove('bg-[#0e0e0e]/60');
                header.classList.add('bg-[#0e0e0e]');
            }
        });
    }

    // Scroll Header Style
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2', 'shadow-[0_4px_30px_rgba(223,142,255,0.15)]');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('py-2', 'shadow-[0_4px_30px_rgba(223,142,255,0.15)]');
            header.classList.add('py-4');
        }
    });

    // Intersection Observer for Animations (fade-in-up, slide-in-left)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .slide-in-left').forEach(element => {
        observer.observe(element);
    });

    // Dynamic Visualizer Bars
    const visualizer = document.getElementById('visualizer');
    if (visualizer) {
        const colors = ['bg-primary', 'bg-secondary', 'bg-tertiary'];
        for (let i = 0; i < 40; i++) {
            const bar = document.createElement('div');
            // Random base height 10-100%
            const height = Math.floor(Math.random() * 90) + 10;
            // Random color
            const colorClass = colors[Math.floor(Math.random() * colors.length)];
            // Random animation delay
            const delay = Math.random() * -2; // negative so it starts immediately at different phases
            
            bar.className = `visualizer-bar ${colorClass}`;
            bar.style.height = `${height}%`;
            bar.style.opacity = Math.random() * 0.5 + 0.3;
            bar.style.animationDelay = `${delay}s`;
            bar.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
            
            visualizer.appendChild(bar);
        }
    }
});
