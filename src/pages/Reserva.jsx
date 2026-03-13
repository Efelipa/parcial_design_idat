import React from 'react';
import './Reserva.css';

const Reserva = () => {
    return (
        <main className="reserva-page">
            <div className="container">
                <div className="reserva-header">
                    <h1>Reserva tu Mesa</h1>
                    <p>Asegura tu lugar para disfrutar de una experiencia gastronómica inolvidable.</p>
                </div>
                
                <section className="reserva-content">
                    {/* Formulario de Reserva */}
                    <div className="reserva-form-container">
                        <form className="reserva-form">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Completo</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Ej. Juan Pérez" required />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="tel" id="telefono" name="telefono" placeholder="+51 999 999 999" required />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fecha">Fecha</label>
                                    <input type="date" id="fecha" name="fecha" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hora">Hora</label>
                                    <input type="time" id="hora" name="hora" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="personas">Número de Personas</label>
                                <select id="personas" name="personas" required>
                                    <option value="">Seleccionar...</option>
                                    <option value="1">1 Persona</option>
                                    <option value="2">2 Personas</option>
                                    <option value="3">3 Personas</option>
                                    <option value="4">4 Personas</option>
                                    <option value="5">5 Personas</option>
                                    <option value="6">6+ Personas</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje">Comentarios Adicionales</label>
                                <textarea id="mensaje" name="mensaje" rows="4" placeholder="¿Alguna alergia o petición especial?"></textarea>
                            </div>

                            <button type="submit" className="btn-reserva">Confirmar Reserva</button>
                        </form>
                    </div>

                    {/* Información Lateral */}
                    <aside className="reserva-info">
                        <h3>Información Importante</h3>
                        <ul>
                            <li>Las reservas tienen una tolerancia de 15 minutos.</li>
                            <li>Para grupos mayores a 6 personas, por favor contáctenos directamente.</li>
                            <li>Contamos con estacionamiento privado para clientes.</li>
                        </ul>
                        <div className="contact-info">
                            <p><strong>Teléfono:</strong> +51 01 123 4567</p>
                            <p><strong>Email:</strong> reservas@restaurante.com</p>
                            <p><strong>Dirección:</strong> Av. Principal 123, Lima</p>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
};

export default Reserva;