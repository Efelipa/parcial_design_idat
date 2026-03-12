import React from "react";

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="container dashboard-section">
                <div className="title dashboard-title-container">
                    <h1>Panel de Control</h1>
                    <h2>Gestión de Reservas</h2>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Reservas Hoy</h3>
                        <span className="stat-value">24</span>
                        <p className="stat-desc">+4 pendientes de confirmar</p>
                    </div>

                    <div className="stat-card">
                        <h3>Mesas Disponibles</h3>
                        <span className="stat-value">8</span>
                        <p className="stat-desc">De 20 mesas totales</p>
                    </div>

                    <div className="stat-card">
                        <h3>Comensales Activos</h3>
                        <span className="stat-value">56</span>
                        <p className="stat-desc">En el turno actual</p>
                    </div>
                </div>

                <div className="table-container">
                    <div className="table-header">
                        <h3>Próximas Reservas</h3>
                        <button className="btn-main btn-small">Nueva Reserva</button>
                    </div>
                    
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Cliente</th>
                                <th>Personas</th>
                                <th>Mesa</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13:30</td>
                                <td>Ana García</td>
                                <td>4</td>
                                <td>M-05</td>
                                <td><span className="status-badge status-confirmed">Confirmada</span></td>
                            </tr>
                            <tr>
                                <td>14:00</td>
                                <td>Carlos Rodríguez</td>
                                <td>2</td>
                                <td>M-02</td>
                                <td><span className="status-badge status-pending">Pendiente</span></td>
                            </tr>
                            <tr>
                                <td>14:15</td>
                                <td>Lucía Fernández</td>
                                <td>6</td>
                                <td>M-10</td>
                                <td><span className="status-badge status-confirmed">Confirmada</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;