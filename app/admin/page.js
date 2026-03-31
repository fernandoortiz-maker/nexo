'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function AdminDashboard() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // Computed Stats
    const revenue = requests.reduce((acc, curr) => acc + (curr.amount || 0), 0);
    const pendingOrders = requests.filter(r => r.status === 'pending').length;
    const processOrders = requests.filter(r => r.status === 'process').length;
    const completedOrders = requests.filter(r => r.status === 'completed').length;

    const stats = [
        { label: 'Ingresos Totales', value: `$${revenue.toLocaleString()}`, trend: '+100%', isUp: true },
        { label: 'Peticiones Pendientes', value: pendingOrders, trend: 'Activas', isUp: true },
        { label: 'En Proceso', value: processOrders, trend: 'Desarrollando', isUp: false },
        { label: 'Completadas', value: completedOrders, trend: 'Exitosas', isUp: true },
    ];

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await fetch('/api/orders');
            if (res.ok) {
                const data = await res.json();
                setRequests(data);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleStatusCycle = async (id, currentStatus) => {
        const nextStatus = currentStatus === 'pending' ? 'process' :
            currentStatus === 'process' ? 'completed' : 'pending';

        try {
            const res = await fetch(`/api/orders/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: nextStatus })
            });

            if (res.ok) {
                // Optimistic update or refetch
                fetchOrders();
            }
        } catch (e) {
            alert('Error al actualizar');
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'pending': return styles.statusPending;
            case 'process': return styles.statusProcess;
            case 'completed': return styles.statusCompleted;
            default: return '';
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'pending': return 'Pendiente';
            case 'process': return 'En Proceso';
            case 'completed': return 'Completado';
            default: return status;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Panel de Control</h1>
                    <p style={{ color: '#888' }}>Bienvenido de nuevo, Admin</p>
                </div>
                <Link href="/admin/products">
                    <button style={{
                        background: 'var(--primary)',
                        color: 'black',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        fontWeight: '700',
                        cursor: 'pointer'
                    }}>
                        Gestionar Contenido web
                    </button>
                </Link>
            </div>

            {/* Metrics Grid */}
            <div className={styles.grid}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.card}>
                        <div>
                            <p className={styles.cardLabel}>{stat.label}</p>
                            <p className={styles.cardValue}>{stat.value}</p>
                        </div>
                        <p className={`${styles.cardTrend} ${stat.isUp ? styles.trendUp : ''}`}>
                            {stat.trend}
                        </p>
                    </div>
                ))}
            </div>

            {/* Requests Table */}
            <div>
                <h2 className={styles.sectionTitle}>Peticiones Recientes</h2>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>ID Orden</th>
                                <th>Cliente</th>
                                <th>Servicio</th>
                                <th>Fecha</th>
                                <th>Monto</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan="7" style={{ textAlign: 'center', padding: '2rem' }}>Cargando datos...</td></tr>
                            ) : requests.map((req) => (
                                <tr key={req.id}>
                                    <td>#{req.id}</td>
                                    <td>
                                        <div style={{ fontWeight: 'bold' }}>{req.client}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#888' }}>{req.email}</div>
                                    </td>
                                    <td>{req.service}</td>
                                    <td>{req.date}</td>
                                    <td style={{ fontWeight: 600 }}>${req.amount}</td>
                                    <td>
                                        <span className={`${styles.status} ${getStatusClass(req.status)}`}>
                                            {getStatusLabel(req.status)}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className={styles.actionBtn}
                                            onClick={() => handleStatusCycle(req.id, req.status)}
                                        >
                                            Cambiar Estado
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
