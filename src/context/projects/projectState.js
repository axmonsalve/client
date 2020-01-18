import React, { useReducer } from "react";

import uuid from "uuid";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

//Types
import {
  PROJECT_FORM,
  GET_PROJECT,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT
} from "../../types";

const ProjectState = props => {
  const projects = [
    { id: 1, name: "Tienda virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Diseño del sitio web" },
    { id: 4, name: "MERN" }
  ];

  //Defeinir el state incial com en redux
  const initialState = {
    projects: [],
    formProject: false, //Que cuando cambia a true, se mostrará en el sidebar los demas componentes
    errorForm: false,
    selectedProject: null
  };

  //Obtener los proyectos
  const getProjects = () => {
    dispatch({
      type: GET_PROJECT,
      payload: projects
    });
  };

  //Agregar nuevo proyecto
  const addProject = project => {
    project.id = uuid.v4();
    //Insertar el proyecto en el state
    dispatch({
      type: ADD_PROJECT,
      payload: project
    });
  };

  //Validar formulario por error de ingreso vacío
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM
    });
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Serie de funciones para el CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    });
  };

  //Selecciona el proyecto que el usuario da click
  const actualProject = projectId => {
      dispatch({
          type: ACTUAL_PROJECT,
          payload: projectId
      })
  }

  //Retornamos con el context
  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        formProject: state.formProject,
        errorForm: state.errorForm,
        selectedProject: state.selectedProject,
        getProjects,
        addProject,
        showForm,
        showError,
        actualProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
