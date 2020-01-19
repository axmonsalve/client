import React, { useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";

import TaskContext from "../../context/Tasks/taskContext";

const Project = ({ project }) => {
  //Obtener el state de proyectos
  const projectsContext = useContext(ProjectContext);
  const { actualProject } = projectsContext;

  //Obtener la/s funcion/es del context de tarea
  const tasksContext = useContext(TaskContext);
  const { getTaskFn } = tasksContext;

  //Funcion para agregar el proyecto actual
  const selectProject = id => {
    actualProject(id); //Fijando el proyecto actual
    getTaskFn(id); //Fijando las tareas cuando el usuario de click en el proyecto
  }
  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={() => selectProject(project.id)}>
        {project.name}
      </button>
    </li>
  );
};

export default Project;
