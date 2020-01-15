import React, { useState } from "react";
import  { Link } from 'react-router-dom';

const Login = () => {
  //State para inciar sesión
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  //Extraer de usuario
  const { email, password } = user;

  //Colocamos los valores de los inputs al state mientras van cambiando
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  //Cuando el usuario quiere iniciar sesión
  const onSubmit = e => {
      e.preventDefault();

      //Validar que no haya campos vacíos

      
      //Pasarlo al action
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="Tu nombre"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              name="password"
              id="password"
              placeholder="Tu password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              value="Iniciar Sesión"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={'/new-account'} className="enlace-cuenta">Obtener una cuenta</Link>
      </div>
    </div>
  );
};

export default Login;
