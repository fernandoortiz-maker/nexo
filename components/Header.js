'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function checkUser() {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (e) {
        // Not logged in
      }
    }
    checkUser();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/';
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <img src="/nexo/nexosfera-logo.png" alt="Nexosfera Logo" className={styles.logoImage} />
            <span className="gradient-text" style={{ marginLeft: '10px' }}>Nexosfera</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Inicio</Link>
          <Link href="/catalogo" className={styles.link}>Catálogo</Link>
          {user?.role === 'admin' && (
            <Link href="/admin" className={styles.link}>Admin Panel</Link>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          {user ? (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>Hola, {user.name}</span>
              <button onClick={handleLogout} className={styles.logoutBtn}>Salir</button>
            </div>
          ) : (
            <Link href="/login">
              <button className={styles.loginBtn}>Ingresar</button>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMenu}>
          <div className={styles.mobileMenu} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeMenu} aria-label="Cerrar menú">✕</button>
            <nav className={styles.mobileNav}>
              <Link href="/" className={styles.mobileLink} onClick={closeMenu}>Inicio</Link>
              <Link href="/catalogo" className={styles.mobileLink} onClick={closeMenu}>Catálogo</Link>
              {user?.role === 'admin' && (
                <Link href="/admin" className={styles.mobileLink} onClick={closeMenu}>Admin Panel</Link>
              )}
            </nav>
            <div className={styles.mobileActions}>
              {user ? (
                <>
                  <span className={styles.mobileUserName}>Hola, {user.name}</span>
                  <button onClick={handleLogout} className={styles.logoutBtn}>Salir</button>
                </>
              ) : (
                <Link href="/login" onClick={closeMenu}>
                  <button className={styles.loginBtn}>Ingresar</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
