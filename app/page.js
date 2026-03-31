import { promises as fs } from 'fs';
import path from 'path';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import styles from './page.module.css';

async function getFeaturedProducts() {
  try {
    const proyectosDir = path.join(process.cwd(), 'public', 'proyectos');
    const items = await fs.readdir(proyectosDir, { withFileTypes: true });

    const folders = items.filter(item => item.isDirectory());

    // Some fake images to give some color to the cards since we don't have thumnails
    const placeholderImages = [
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80',
      'https://images.unsplash.com/photo-1599447421405-0c325d36d77e?w=800&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80'
    ];

    const products = await Promise.all(folders.map(async (folder, index) => {
      const name = folder.name;
      const title = name.replace(/_/g, ' ');
      // Assign an image based on the index to have some variety
      const image = placeholderImages[index % placeholderImages.length];

      let enDesarrollo = false;
      try {
        await fs.access(path.join(proyectosDir, name, 'index.html'));
      } catch {
        enDesarrollo = true;
      }

      return {
        id: name,
        title: title,
        category: 'Plantilla',
        image: image,
        description: `Proyecto web estático para ${title}.`,
        url: `/nexo/proyectos/${name}/index.html`,
        enDesarrollo
      };
    }));

    return products;
  } catch (e) {
    console.error('Error leyendo la carpeta de proyectos:', e);
    return [];
  }
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  const categories = [
    { title: 'Restaurantes y Comida', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80', enDesarrollo: false },
    { title: 'Gimnasios y Fitness', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80', enDesarrollo: false },
    { title: 'Estudios de Música', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80', enDesarrollo: false },
    { title: 'Ecommerce y Ropa', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80', enDesarrollo: true },
    { title: 'Corporativos', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80', enDesarrollo: true },
    { title: 'Clínicas Médicas', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80', enDesarrollo: true },
  ];

  return (
    <div className={styles.main}>
      <Hero />

      {/* Categories Section - "Bento Layout" */}
      <section id="categorias" className={styles.categoriesSection}>
        <div>
          <h2 className={styles.sectionTitle}>
            Explora por Industria
          </h2>
          <p className={styles.sectionSubtitle}>
            Diseños curados para cada sector. Encuentra la identidad visual perfecta que elevará tu negocio al siguiente nivel.
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((cat, index) => (
            <CategoryCard key={cat.title} title={cat.title} image={cat.image} enDesarrollo={cat.enDesarrollo} />
          ))}
        </div>
      </section>

      {/* Featured Websites Section - "Editorial Style" */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredContainer}>
          <div className={styles.featuredHeader}>
            <div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '0.5rem' }}>
                Proyectos Disponibles
              </h2>
              <p className={styles.sectionSubtitle} style={{ marginBottom: '0.5rem' }}>
                Explora el repositorio de proyectos y plantillas estáticas.
              </p>
              <p style={{ color: '#aaa', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: 0 }}>
                * Nota: Estas son solo páginas de ejemplo para demostrar estructuras estáticas.
              </p>
            </div>
            {/* Optional: Add a "View All" button here if desired later */}
          </div>

          <div className={styles.featuredGrid}>
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p style={{ color: '#888', textAlign: 'center', gridColumn: '1/-1' }}>
                Pronto agregaremos nuevos diseños exclusivos.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
