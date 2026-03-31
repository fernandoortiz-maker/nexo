'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSending(false);
        alert('Mensaje enviado. Un especialista te contactará en breve.');
        setFormData({ name: '', email: '', budget: '', message: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "¿Qué incluyen los diseños?",
            a: "Recibirás el código fuente completo (Next.js/React), activos de diseño y documentación paso a paso para la instalación."
        },
        {
            q: "¿Ofrecen instalación personalizada?",
            a: "Sí, podemos instalar y configurar la plantilla en tu servidor por un costo adicional."
        },
        {
            q: "¿Tienen política de reembolso?",
            a: "Debido a la naturaleza digital del producto, solo ofrecemos reembolsos si el código tiene errores técnicos no reparables. Ofrecemos demos en vivo para que estés 100% seguro."
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.mainTitle}>
                    Inicia tu Transformación <span className="gradient-text">Digital</span>
                </h1>
                <p className={styles.subtitle}>
                    Estamos listos para ayudarte a lanzar la plataforma que tu negocio merece.
                </p>
            </div>

            <div className={styles.grid}>
                {/* Contact Info & Trust */}
                <div className={styles.infoSection}>
                    <div className={styles.trustCard}>
                        <h3>¿Por qué elegir LaunchWeb Studio?</h3>
                        <ul className={styles.trustList}>
                            <li>
                                <span className={styles.check}>✓</span>
                                <div>
                                    <strong>Calidad Premium Garantizada</strong>
                                    <p>Diseños optimizados para conversión y velocidad.</p>
                                </div>
                            </li>
                            <li>
                                <span className={styles.check}>✓</span>
                                <div>
                                    <strong>Soporte Prioritario</strong>
                                    <p>Respuesta garantizada en menos de 24 horas.</p>
                                </div>
                            </li>
                            <li>
                                <span className={styles.check}>✓</span>
                                <div>
                                    <strong>Tecnología Moderna</strong>
                                    <p>Construido con el stack más moderno (Next.js 15).</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.quickContact}>
                        <div className={styles.contactItem}>
                            <span className={styles.icon}>✉️</span>
                            <div className={styles.contactDetails}>
                                <p className={styles.label}>Correo Electrónico</p>
                                <a href="mailto:hola@launchwebstudio.com" className={styles.value}>hola@launchwebstudio.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formSection}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formHeader}>
                            <h2>Envíanos un mensaje</h2>
                            <p>Te responderemos hoy mismo.</p>
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.field}>
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label>Presupuesto Estimado</label>
                            <select name="budget" value={formData.budget} onChange={handleChange}>
                                <option value="">Selecciona un rango...</option>
                                <option value="low">Menos de $500 USD</option>
                                <option value="medium">$500 - $2,000 USD</option>
                                <option value="high">$2,000 - $5,000 USD</option>
                                <option value="enterprise">Más de $5,000 USD</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label>Cuéntanos sobre tu proyecto</label>
                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Detalles, requerimientos especiales, o dudas..."
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={sending}>
                            {sending ? 'Enviando...' : 'Solicitar Propuesta'}
                        </button>
                    </form>
                </div>
            </div>

            {/* FAQ Section */}
            <div className={styles.faqSection}>
                <h2 className={styles.faqTitle}>Preguntas Frecuentes</h2>
                <div className={styles.faqGrid}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                                <span>{faq.q}</span>
                                <span className={styles.toggleIcon}>{openFaq === index ? '−' : '+'}</span>
                            </button>
                            {openFaq === index && (
                                <div className={styles.faqAnswer}>
                                    <p>{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
