import React, { Fragment, useState, useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";

const NewProject = () => {
  //Obtener el state del formulario
  const projectsContext = useContext(ProjectContext);
  const { formProject, errorForm, showForm, addProject, showError } = projectsContext;

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
    if (name === ""){
      showError(); 
      return;
    }

    //Agregar el proyecto al state
    addProject(project);

    //Reiniciar el form
    setProject({ name: '' });
  };

  const onClickForm = () => {
    showForm();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickForm}
      >
        Nuevo proyecto
      </button>

      {formProject ? (
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
      ) : null}
      {errorForm ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
    </Fragment>
  );
};

export default NewProject;
