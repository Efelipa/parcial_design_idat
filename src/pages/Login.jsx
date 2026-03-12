import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section id="login-section">
                <div className="login-image"></div>

                <div className="login-content">
                    <h2 className="login-title">INICIAR SESIÓN</h2>
                
                    <form className="login-form">
                        <div className="input-group">
                            <label>USUARIO</label>
                            <input type="text" placeholder="Escribe tu usuario" />
                        </div>

                        <div className="input-group">
                            <label>CONTRASEÑA</label>
                            <input type="password" placeholder="Escribe tu contraseña" />
                        </div>
                        <Link to='/dashboard' className="btn-submit">INICIAR SESIÓN</Link>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;
