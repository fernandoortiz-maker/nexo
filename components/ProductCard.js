'use client';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    const isDev = product.enDesarrollo;

    return (
        <a 
            href={isDev ? '#' : (product.url || `/catalogo/${product.id}`)} 
            className={styles.linkWrapper}
            onClick={(e) => isDev && e.preventDefault()}
            style={isDev ? { cursor: 'not-allowed', opacity: 0.85 } : {}}
        >
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image} alt={product.title} className={styles.image} style={isDev ? { filter: 'grayscale(100%)' } : {}} />
                    <div className={styles.overlay}>
                        <button className={styles.viewBtn}>
                            {isDev ? 'Próximamente' : 'Ver Detalles'}
                        </button>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.header}>
                        <span className={styles.category} style={isDev ? { background: '#333' } : {}}>
                            {isDev ? 'En Construcción' : product.category}
                        </span>
                        {product.price && <span className={styles.price}>${product.price}</span>}
                    </div>
                    <h3 className={styles.title}>{product.title}</h3>
                    <p className={styles.description}>{product.description}</p>
                    <button className={styles.buyBtn} style={isDev ? { background: '#333', color: '#999', pointerEvents: 'none' } : {}}>
                        {isDev ? 'En Desarrollo 🛠️' : 'Ver Demo'}
                    </button>
                </div>
            </div>
        </a>
    );
}
