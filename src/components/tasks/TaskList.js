import React, { Fragment, useContext } from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/projectContext";

const TaskList = () => {
  //Extraemos los proyectos del state incial
  const projectsContext = useContext(ProjectContext);
  const { selectedProject, deleteProjectFn } = projectsContext;

  //Si no hay proyecto seleccionado
  if (!selectedProject) return <h2>Selecciona un proyecto</h2>;

  //Array destructuring para extraer el proyecto actual
  const [actualProject] = selectedProject;

  //Eliminar un proyecto
  const onClickDeleteProject = () => {
    deleteProjectFn(actualProject.id);
  };

  const tasks = [];

  return (
    <Fragment>
      <h2>Proyecto: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tasks.map(task => <Task task={task} />)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickDeleteProject}
      >
        Eliminar proyecto &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
