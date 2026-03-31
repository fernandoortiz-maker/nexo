'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                window.location.href = '/'; // Hard reload to update header state
            } else {
                const data = await res.json();
                setError(data.message || 'Error al iniciar sesión');
            }
        } catch (err) {
            setError('Error de conexión');
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.card} glass`}>
                <h1 className="gradient-text">Bienvenido</h1>
                <p className={styles.subtitle}>Ingresa a tu cuenta para continuar</p>

                {error && <div className={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label>Email o Usuario</label>
                        <input
                            type="text"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitBtn}>Entrar</button>
                </form>

                <div className={styles.divider}>o continúa con</div>

                <button className={styles.googleBtn} onClick={() => alert('Próximamente: Iniciar sesión con Google')}>
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className={styles.googleIcon} />
                    Google
                </button>

                <p className={styles.footer}>
                    ¿No tienes cuenta? <Link href="/register">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
}
