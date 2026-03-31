import styles from './CategoryCard.module.css';

export default function CategoryCard({ title, image }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.bgImage} />
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.arrow}>Ver más</p>
            </div>
        </div>
    );
}
