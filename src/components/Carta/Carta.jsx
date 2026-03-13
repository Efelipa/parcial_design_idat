import React from 'react';
import './Carta.css';

const Carta = ({ producto }) => {
return (
        <article className="plato-card">
        <div className="card-image-wrapper">
            {producto.popular && <span className="badge-popular">Popular</span>}
            <img src={producto.imagen} alt={producto.nombre} className="card-img" />
        </div>

        <div className="card-body">
            <div className="card-top">
            <h3 className="card-title">{producto.nombre}</h3>
            <span className="card-price">${producto.precio.toFixed(2)}</span>
            </div>
            
            <p className="card-description">{producto.descripcion}</p>

            <div className="card-stats">
            <span className="rating">⭐ {producto.rating}</span>
            <span className="votes">({producto.votos} votos)</span>
            </div>
        </div>
        </article>
    );
};

export default Carta;