import React from 'react';

const Login = () => {

    const onChange = () => {

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Tu nombre" onChange={onChange}/>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Tu password" onChange={onChange}/>
                    </div>

                    <div className="campo-form">
                        <input type="submit" value="Iniciar Sesión" className="btn btn-primario btn-block"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;