import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => { 
    const location = useLocation();
    return (
        <nav id='restaurant-nav' className='navbar'>
            <div className="container">
                <ul className='links'>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/carta'>Carta</Link>
                    </li>
                    <li>
                        <Link to='/nosotros'>Nosotros</Link>
                    </li>
                </ul>
                {location.pathname !== '/login' && location.pathname !== '/dashboard' && (
                    <Link to='/login' className='btn | btn-main'>Iniciar Sesión</Link>
                )}
                {location.pathname === '/dashboard' && (
                    <Link to='/' className='btn | btn-danger'>Cerrar Sesión</Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar;  