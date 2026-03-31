import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.blob}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Destaca del resto.
                </h1>
                <p className={styles.subtitle}>
                    Olvídate de lo básico. Encuentra el diseño perfecto para tu marca y lánzalo al mundo con estilo en cuestión de minutos.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="/catalogo" className={styles.primaryBtn}>
                        Ver Catálogo
                    </Link>
                    <Link href="/contacto" className={styles.secondaryBtn}>
                        Contactar
                    </Link>
                </div>
            </div>
        </section>
    );
}
