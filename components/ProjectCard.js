import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, tags, image, link }) {
    // Fallback image if none provided
    const bgImage = image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop';

    return (
        <div className={`${styles.card} glass`}>
            <div className={styles.imageContainer}>
                {/* Using simple img tag for simplicity, in real app use Next/Image */}
                <img src={bgImage} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                {tags && (
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                )}

                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
                        Ver Proyecto
                    </a>
                )}
            </div>
        </div>
    );
}
