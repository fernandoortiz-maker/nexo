'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import styles from './page.module.css';

export default function CatalogPage() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const categories = [
        { id: 'all', name: 'Todas' },
        { id: 'restaurantes', name: 'Restaurantes' },
        { id: 'gimnasios', name: 'Gimnasios' },
        { id: 'tiendas', name: 'E-commerce' },
        { id: 'corporativos', name: 'Corporativos' },
        { id: 'links', name: 'Bio Links' },
    ];

    useEffect(() => {
        async function fetchProducts() {
            try {
                // If using GitHub Pages with a specific base path (e.g. /nombre-repo)
                // Next.js static export requires prepending the basePath manually in fetch for client components
                // We'll fetch from the absolute basePath to avoid 404s in subroutes
                const res = await fetch('/nexo/data/products.json');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                }
            } catch (error) {
                console.error('Error fetching products', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const activeCategoryName = categories.find(c => c.id === selectedCategory)?.name || 'Catálogo';

    return (
        <div className={styles.container}>
            <div className={styles.layoutWrapper}>
                {/* Sidebar Filter Area */}
                <aside className={styles.sidebar}>
                    <div>
                        <h3 className={styles.sidebarTitle}>Buscar</h3>
                        <div className={styles.searchWrapper}>
                            <svg className={styles.searchIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Buscar diseño..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={styles.searchInput}
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.sidebarTitle}>Categorías</h3>
                        <div className={styles.categoriesList}>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    className={`${styles.filterBtn} ${selectedCategory === cat.id ? styles.active : ''}`}
                                    onClick={() => setSelectedCategory(cat.id)}
                                >
                                    <span>{cat.name}</span>
                                    {selectedCategory === cat.id && (
                                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className={styles.mainContent}>
                    <header className={styles.header}>
                        <h1 className={styles.title}>
                            <span className="gradient-text">{activeCategoryName}</span>
                        </h1>
                        <p className={styles.subtitle}>
                            {filteredProducts.length} diseños disponibles para esta selección
                        </p>
                    </header>

                    <div className={styles.grid}>
                        {loading ? (
                            <div className={styles.loadingContainer}>
                                <div className={styles.spinner}></div>
                                <p>Cargando colección...</p>
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <div className={styles.noResults}>
                                <p>No encontramos diseños que coincidan con tu búsqueda.</p>
                                <button
                                    className={styles.clearBtn}
                                    onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
