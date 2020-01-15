import React, { Fragment, useState } from "react";

const NewProject = () => {
  //State para el proyecto
  const [project, setProject] = useState({
    name: ""
  });

  //Destructuring del proyecto
  const { name } = project;

  //Evento onchange del input nombre del proyecto que se agregará al state
  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  //Evento que ejecuta el input del form cuando se crea el proyecto
  const onSubmitProject = e => {
      e.preventDefault();

      //Validar el proyecto

      //Agregar el proyecto al state

      //Reiniciar el form
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo proyecto
      </button>

      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre del proyecto"
          name="name"
          onChange={onChangeProject}
          value={name}
        />

        <input
          type="submit"
          value="Agregar proyecto"
          className="btn btn-block btn-primario"
        />
      </form>
    </Fragment>
  );
};

export default NewProject;
