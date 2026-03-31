import Link from 'next/link';
import ProjectCard from '../../components/ProjectCard';
import styles from './page.module.css';

export const metadata = {
    title: 'Nosotros | LaunchWeb Studio',
    description: 'Conoce LaunchWeb Studio, expertos en diseño web premium y desarrollo digital.',
};

export default function AboutPage() {
    const projects = [
        {
            title: "Inmobiliaria Elite",
            description: "Plataforma de bienes raíces de lujo con recorridos virtuales y diseño minimalista.",
            tags: ["Real Estate", "Next.js", "Diseño UX"],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
            link: "#"
        },
        {
            title: "Neon E-commerce",
            description: "Tienda online de ropa urbana con efectos visuales dinámicos y pasarela de pago optimizada.",
            tags: ["E-commerce", "Stripe", "Dark Mode"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
            link: "#"
        },
        {
            title: "Restaurante Sabor",
            description: "Sitio web para cadena de restaurantes con sistema de reservas en tiempo real y menú digital.",
            tags: ["Restaurante", "Reservas", "Responsive"],
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
            link: "#"
        }
    ];

    return (
        <div className={styles.container}>
            {/* Background Blobs */}
            <div className={styles.backgroundWrapper}>
                <div className={`${styles.blob} ${styles.blob1}`}></div>
                <div className={`${styles.blob} ${styles.blob2}`}></div>
                <div className={`${styles.blob} ${styles.blob3}`}></div>
            </div>

            {/* SVG Gradient Definition */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
                <defs>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Hero Section */}
            <section className={`${styles.hero} glow-effect`}>
                <h1 className={styles.heroTitle}>
                    Ingeniería Digital de <span className="gradient-text">Alto Impacto</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    En LaunchWeb Studio, desarrollamos soluciones web escalables y de alto rendimiento que posicionan a su marca como líder en su industria.
                </p>
            </section>

            {/* About Section */}
            <section className={styles.section}>
                <div className={styles.aboutGrid}>
                    <div className={`${styles.aboutCard} glass`}>
                        {/* SVG Icon: Mission (Target/Rocket) */}
                        <div className={styles.aboutIcon}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#iconGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M22 12A10 10 0 0 0 12 2v10z" />
                            </svg>
                        </div>
                        <h3>Nuestra Misión</h3>
                        <p style={{ marginTop: '1rem', color: '#b0b0b0', fontSize: '1rem', lineHeight: '1.6' }}>
                            Impulsar la transformación digital de nuestros clientes mediante arquitecturas web robustas y diseños centrados en la conversión, garantizando un retorno de inversión tangible y sostenible.
                        </p>
                    </div>
                    <div className={`${styles.aboutCard} glass`}>
                        {/* SVG Icon: Vision (Eye/Globe) */}
                        <div className={styles.aboutIcon}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#iconGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <h3>Nuestra Visión</h3>
                        <p style={{ marginTop: '1rem', color: '#b0b0b0', fontSize: '1rem', lineHeight: '1.6' }}>
                            Consolidarnos como el socio tecnológico preferente para empresas que buscan excelencia, innovación y una presencia digital que defina estándares de calidad en el mercado global.
                        </p>
                    </div>
                    <div className={`${styles.aboutCard} glass`}>
                        {/* SVG Icon: Approach (Hexagon/Handshake/Layers) */}
                        <div className={styles.aboutIcon}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#iconGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <h3>Metodología</h3>
                        <p style={{ marginTop: '1rem', color: '#b0b0b0', fontSize: '1rem', lineHeight: '1.6' }}>
                            Aplicamos procesos de desarrollo ágiles y estándares de código limpio. Nuestro enfoque no es solo entregar un sitio, sino construir una infraestructura digital optimizada y segura.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    Casos de <span className="gradient-text">Éxito</span>
                </h2>
                <div className={styles.portfolioGrid}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            {/* Services/Why Choose Us */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Excelencia Técnica</h2>
                <div className={styles.servicesGrid}>
                    <div className={styles.serviceItem}>
                        <div className={styles.aboutIcon} style={{ width: '60px', height: '60px', marginBottom: '1rem' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                <path d="M8.5 8.5v.01" />
                                <path d="M16 15.5v.01" />
                                <path d="M12 12v.01" />
                                <path d="M7 16v.01" />
                                <path d="M15 8v.01" />
                            </svg>
                        </div>
                        <h3 className={styles.serviceTitle}>Diseño UI/UX Premium</h3>
                        <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>Interfaces intuitivas y estéticamente superiores diseñadas para maximizar la retención de usuarios.</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <div className={styles.aboutIcon} style={{ width: '60px', height: '60px', marginBottom: '1rem' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                        </div>
                        <h3 className={styles.serviceTitle}>Arquitectura SEO</h3>
                        <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>Implementación técnica avanzada para garantizar la máxima visibilidad en motores de búsqueda.</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <div className={styles.aboutIcon} style={{ width: '60px', height: '60px', marginBottom: '1rem' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" />
                            </svg>
                        </div>
                        <h3 className={styles.serviceTitle}>Performance</h3>
                        <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>Tiempos de carga ultrarrápidos (Core Web Vitals optimizados) para una experiencia fluida.</p>
                    </div>
                    <div className={styles.serviceItem}>
                        <div className={styles.aboutIcon} style={{ width: '60px', height: '60px', marginBottom: '1rem' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                        </div>
                        <h3 className={styles.serviceTitle}>Calidad de Código</h3>
                        <p style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>Desarrollo modular y mantenible, siguiendo las mejores prácticas de la industria.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                    Eleve su presencia digital hoy
                </h2>
                <p style={{ fontSize: '1.25rem', color: '#d0d0d0', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                    Agende una consultoría estratégica para discutir los requerimientos de su próximo proyecto.
                </p>
                <Link href="/contacto" className={styles.ctaButton}>
                    Solicitar Cotización
                </Link>
            </section>
        </div>
    );
}
