import Link from 'next/link';
import ProductCard from '../../components/ProductCard'; // Assuming we'll reuse this layout
import styles from './page.module.css';

export default function OffersPage() {
    // Placeholder data for offers. In a real scenario, this might come from a DB with a filter.
    const offers = [
        // Example offer structure (remove or keep as needed)
        // { id: 'offer-1', title: 'StartUp Bundle', price: '49.99', oldPrice: '99.99', image: '...', description: '...' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className="gradient-text">Ofertas Especiales</h1>
                <p className={styles.subtitle}>Aprovecha descuentos exclusivos por tiempo limitado en nuestras mejores plantillas.</p>
            </div>

            {offers.length > 0 ? (
                <div className={styles.grid}>
                    {/* Render specific offer cards here */}
                </div>
            ) : (
                <div className={styles.emptyState}>
                    <h2>¡Próximamente!</h2>
                    <p>Estamos preparando promociones increíbles para ti. Vuelve pronto.</p>
                    <Link href="/catalogo">
                        <button className={styles.backBtn}>Ver Catálogo Completo</button>
                    </Link>
                </div>
            )}
        </div>
    );
}
