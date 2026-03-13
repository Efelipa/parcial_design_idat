import React, { useState } from 'react';
import { productos, categorias } from '../../utils/data/carta_data.js'; // Importamos tus arrays
import Carta from '../Carta/Carta.jsx';
import '../Carta/Carta.css';

const CartaMain = () => {
    const [filtro, setFiltro] = useState('todos');

    const productosFiltrados = filtro === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === filtro);

    return (
        <main className="carta-page">
        <div className="container">
            <header className="carta-header">
            <h1>Nuestra Selección de Platos</h1>
            <p>Explora los sabores auténticos de nuestra cocina</p>
            </header>

            {/* Barra de Filtros */}
            <nav className="filter-bar">
            {categorias.map(cat => (
                <button 
                key={cat.id}
                className={`filter-btn ${filtro === cat.slug ? 'active' : ''}`}
                onClick={() => setFiltro(cat.slug)}
                >
                {cat.nombre}
                </button>
            ))}
            </nav>

            {/* Grid de Platos */}
            <section className="productos-grid">
            {productosFiltrados.map(producto => (
                <Carta key={producto.id} producto={producto} />
            ))}
            </section>
        </div>
        </main>
    );
};

export default CartaMain;