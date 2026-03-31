'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../login/page.module.css'; // Reusing styles

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                alert('Cuenta creada exitosamente. Por favor inicia sesión.');
                router.push('/login');
            } else {
                setError(data.message || 'Error al registrarse');
            }
        } catch (err) {
            setError('Error de conexión');
        }
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.card} glass`}>
                <h1 className="gradient-text">Crear Cuenta</h1>
                <p className={styles.subtitle}>Únete para comprar diseños premium</p>

                {error && <div className={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label>Nombre Completo</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Email</label>
                        <input
                            type="email"
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
                    <button type="submit" className={styles.submitBtn}>Registrarse</button>
                </form>

                <div className={styles.divider}>o regístrate con</div>

                <button className={styles.googleBtn} onClick={() => alert('Próximamente: Registrarse con Google')}>
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className={styles.googleIcon} />
                    Google
                </button>

                <p className={styles.footer}>
                    ¿Ya tienes cuenta? <Link href="/login">Inicia sesión aquí</Link>
                </p>
            </div>
        </div>
    );
}
