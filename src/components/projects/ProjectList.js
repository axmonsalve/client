import React, { useContext, useEffect } from "react";
import Project from "./Project";

import ProjectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = () => {
  //Extraemos los proyectos del state incial
  const projectsContext = useContext(ProjectContext);
  const { projects, getProjects } = projectsContext;

  //Obtener proyectos cuando carga el comonente
  useEffect(() => {
    getProjects();
  }, []);

  //Revisar si proyectos tiene contenido
  if (projects.length === 0) return 'No hay proyectos';

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
      {projects.map(project => (
        <CSSTransition 
          key={project.id}
          timeout={200}
          classNames="proyecto"
          >
          <Project project={project} />
        </CSSTransition>
      ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
