import React from 'react';
import MainImage from '../../utils/img/main-photo.webp';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main id='main-section'>
            <section className='first-side'>
                <div className="title">
                    <h1>Comida a tu plato</h1>
                    <h2 className='flat-font'>De una forma diferente</h2>
                    <div className="buttons">
                        <Link to='/reserva' className='btn btn-secondary'>Reservar</Link>
                        <Link to='/carta' className='btn btn-main'>Ver carta</Link>
                    </div>
                </div>
            </section>
            <div className="second-side">

            </div>
        </main>
    )
}

export default Main;