import Link from 'next/link';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ title, image, enDesarrollo, href = '/catalogo' }) {
    const cardContent = (
        <div className={`${styles.card} ${enDesarrollo ? styles.inDevelopment : ''}`}>
            <img src={image} alt={title} className={styles.bgImage} />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {title}
                    {enDesarrollo && <span className={styles.devBadge}>Próximamente</span>}
                </h3>
                <p className={`${styles.arrow} ${enDesarrollo ? styles.devArrow : ''}`}>
                    {enDesarrollo ? 'En desarrollo' : 'Ver proyectos'}
                </p>
            </div>
        </div>
    );

    if (enDesarrollo) {
        return cardContent;
    }

    return (
        <Link href={href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
            {cardContent}
        </Link>
    );
}
