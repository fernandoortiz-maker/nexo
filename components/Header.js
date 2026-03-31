'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [user, setUser] = useState(null);

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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <img src="/nexosfera-logo.png" alt="Nexosfera Logo" className={styles.logoImage} />
            <span className="gradient-text" style={{ marginLeft: '10px' }}>Nexosfera</span>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Inicio</Link>
          <Link href="/catalogo" className={styles.link}>Catálogo</Link>
          {/* <Link href="/ofertas" className={styles.link}>Ofertas</Link> */}
          {/* <Link href="/nosotros" className={styles.link}>Nosotros</Link> */}
          {user?.role === 'admin' && (
            <Link href="/admin" className={styles.link}>Admin Panel</Link>
          )}
        </nav>
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
      </div>
    </header>
  );
}
