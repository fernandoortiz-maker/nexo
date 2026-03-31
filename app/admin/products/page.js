'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function ProductsManager() {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null); // null = new product
    const [isLoading, setIsLoading] = useState(true);

    // Initial Form State
    const [formData, setFormData] = useState({
        title: '',
        category: 'restaurantes',
        price: '',
        image: '',
        description: ''
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            }
        } catch (e) {
            console.error('Error fetching products', e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOpenModal = (product = null) => {
        if (product) {
            setCurrentProduct(product);
            setFormData({
                title: product.title,
                category: product.category,
                price: product.price,
                image: product.image,
                description: product.description
            });
        } else {
            setCurrentProduct(null);
            setFormData({
                title: '',
                category: 'restaurantes',
                price: '',
                image: '',
                description: ''
            });
        }
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('¿Estás seguro de eliminar este producto?')) return;

        try {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
            if (res.ok) {
                fetchProducts();
            }
        } catch (e) {
            alert('Error al eliminar');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const method = currentProduct ? 'PUT' : 'POST';
        const url = currentProduct ? `/api/products/${currentProduct.id}` : '/api/products';

        try {
            const res = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setIsModalOpen(false);
                fetchProducts();
            } else {
                alert('Error al guardar');
            }
        } catch (e) {
            alert('Error de conexión');
        }
    };

    return (
        <div className={styles.container}>
            <Link href="/admin" className={styles.backLink}>← Volver al Panel</Link>

            <div className={styles.header}>
                <h1 className={styles.title}>Gestión de Contenido</h1>
                <button className={styles.createBtn} onClick={() => handleOpenModal()}>+ Nuevo Producto</button>
            </div>

            <div className={styles.grid}>
                {products.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <div className={styles.imageContainer}>
                            <img src={product.image || 'https://via.placeholder.com/300'} alt={product.title} className={styles.productImage} />
                        </div>
                        <div className={styles.productContent}>
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <span className={styles.productCategory}>{product.category}</span>
                            <p className={styles.productPrice}>${product.price}</p>
                            <div className={styles.actions}>
                                <button className={styles.editBtn} onClick={() => handleOpenModal(product)}>Editar</button>
                                <button className={styles.deleteBtn} onClick={() => handleDelete(product.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Form */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2>{currentProduct ? 'Editar Producto' : 'Nuevo Producto'}</h2>
                        <form onSubmit={handleSubmit} className={styles.formGrid}>
                            <div className={styles.field}>
                                <label>Título</label>
                                <input
                                    className={styles.input}
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label>Categoría</label>
                                <select
                                    className={styles.select}
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="restaurantes">Restaurantes</option>
                                    <option value="gimnasios">Gimnasios</option>
                                    <option value="tiendas">Tiendas de Ropa</option>
                                    <option value="corporativos">Corporativos</option>
                                    <option value="portafolios">Portafolios</option>
                                    <option value="medicos">Citas Médicas</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label>Precio ($)</label>
                                <input
                                    type="number"
                                    className={styles.input}
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label>URL de Imagen</label>
                                <input
                                    className={styles.input}
                                    value={formData.image}
                                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                                    placeholder="https://..."
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label>Descripción</label>
                                <textarea
                                    className={styles.textarea}
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                            </div>

                            <div className={styles.modalActions}>
                                <button type="button" onClick={() => setIsModalOpen(false)} className={styles.cancelBtn}>Cancelar</button>
                                <button type="submit" className={styles.saveBtn}>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
