// ============================================
// FUNCIONALIDAD MENÚ MÓVIL
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
            mobileNav.style.display = 'flex';
            mobileMenuBtn.textContent = '✕';
        } else {
            mobileNav.style.display = 'none';
            mobileMenuBtn.textContent = '☰';
        }
    });
}

// Responsive menu visibility
function handleResize() {
    if (window.innerWidth > 768) {
        if (mobileNav) mobileNav.style.display = 'none';
        if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
    }
}

window.addEventListener('resize', handleResize);

// ============================================
// MEDIDAS DE SEGURIDAD
// ============================================

// Deshabilitar clic derecho
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
});

// Deshabilitar teclas de desarrollador (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S)
document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I (Inspector)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+J (Consola)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+C (Selector de elementos)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+U (Ver código fuente)
    if (e.ctrlKey && (e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+S (Guardar página)
    if (e.ctrlKey && (e.key === 'S' || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+P (Imprimir)
    if (e.ctrlKey && (e.key === 'P' || e.keyCode === 80)) {
        e.preventDefault();
        return false;
    }
});

// Deshabilitar selección de texto con teclado
document.addEventListener('selectstart', function (e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
    }
});

// Deshabilitar copiar
document.addEventListener('copy', function (e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
    }
});

// Deshabilitar cortar
document.addEventListener('cut', function (e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
    }
});

// Prevenir zoom con Ctrl + rueda del mouse
document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
        return false;
    }
}, { passive: false });

// Prevenir zoom con gestos táctiles
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});

document.addEventListener('gestureend', function (e) {
    e.preventDefault();
});

// Detectar si DevTools está abierto (método básico)
const devtoolsDetector = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;

    if (widthThreshold || heightThreshold) {
        console.clear();
    }
};

// Verificar cada segundo
setInterval(devtoolsDetector, 1000);

// Limpiar consola constantemente
setInterval(() => {
    console.clear();
}, 2000);

// Mensaje de advertencia en consola
console.log('%c⚠️ ALTO', 'color: red; font-size: 40px; font-weight: bold;');
console.log('%cEsta es una función del navegador destinada a desarrolladores.', 'font-size: 16px;');
console.log('%cSi alguien te pidió copiar/pegar algo aquí, es un fraude.', 'font-size: 16px; color: red;');
