import React from 'react';
import MainImage from '../../utils/img/main-photo.webp';

const Main = () => {
    return (
        <main id='main-section'>
            <section className='first-side'>
                <div className="title">
                    <h1>Comida a tu plato</h1>
                    <h2 className='flat-font'>De una forma diferente</h2>
                    <div className="buttons">
                        <a className='btn btn-secondary' href="">Reservar</a>
                        <a className='btn btn-main' href="">Ver carta</a>
                    </div>
                </div>
            </section>
            <div className="second-side">

            </div>
            {/* <img src={MainImage} alt="" id='main-image'/> */}
        </main>
    )
}

export default Main;