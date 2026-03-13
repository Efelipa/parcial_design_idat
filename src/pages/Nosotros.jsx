import React from "react";
import './Nosotros.css';

const Nosotros = () => {
    return (
        <main className="nosotros-page">
            {/* Hero Section */}
            <section className="nosotros-hero">
                <div className="container">
                    <h1>Nuestra Historia</h1>
                    <p>Tradición, pasión y sabor en cada plato desde 2010.</p>
                </div>
            </section>

            {/* Sección de Historia */}
            <section className="container nosotros-content">
                <div className="nosotros-text">
                    <h2>Quiénes Somos</h2>
                    <p>
                        Somos un restaurante dedicado a rescatar los sabores auténticos de nuestra gastronomía, 
                        fusionando técnicas tradicionales con un toque moderno. Nuestra cocina es el resultado 
                        de años de investigación y amor por los ingredientes locales.
                    </p>
                    <p>
                        Creemos que la comida no es solo alimentación, sino una experiencia que une a las personas. 
                        Cada plato que servimos cuenta una historia de nuestra tierra y nuestra gente.
                    </p>
                </div>
                <div className="nosotros-image">
                    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000" alt="Nuestro Chef Cocinando" />
                </div>
            </section>

            {/* Sección de Valores */}
            <section className="valores-section">
                <div className="container">
                    <h2>Nuestros Valores</h2>
                    <div className="valores-grid">
                        <div className="valor-card">
                            <h3>Calidad</h3>
                            <p>Seleccionamos los ingredientes más frescos del mercado diariamente.</p>
                        </div>
                        <div className="valor-card">
                            <h3>Pasión</h3>
                            <p>Cocinamos con el corazón para brindarte la mejor experiencia.</p>
                        </div>
                        <div className="valor-card">
                            <h3>Servicio</h3>
                            <p>Tu satisfacción y sonrisa son nuestra mayor recompensa.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Nosotros;