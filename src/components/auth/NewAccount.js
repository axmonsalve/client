import React, { useState } from "react";
import  { Link } from 'react-router-dom';

const NewAccount = () => {
  //State para inciar sesión
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: ""
  });

  //Extraer de usuario
  const { name, email, password, confirmPass } = user;

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

      //Validar password minimo de 6 caracteres

      //Validar si los 2 password son iguales
      
      //Pasarlo al action
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crea una cuenta</h1>
        <form onSubmit={onSubmit}>
        <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              placeholder="Tu nombre"
              onChange={onChange}
            />
          </div>

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
            <label htmlFor="confirmPass">Confirmar password</label>
            <input
              type="password"
              value={confirmPass}
              name="confirmPass"
              id="confirmPass"
              placeholder="Tu password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              value="Registrarme"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">Volver a inciar sesión</Link>
      </div>
    </div>
  );
};

export default NewAccount;
