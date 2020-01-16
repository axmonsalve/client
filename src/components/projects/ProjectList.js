import React, { useContext } from "react";
import Project from "./Project";

import ProjectContext from "../../context/projects/projectContext";

const ProjectList = () => {

    //Extraemos los proyectos del state incial
    const projectsContext = useContext(ProjectContext);
    const { projects } = projectsContext;

    //Revisar si proyectos tiene contenido
    if(projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
        {projects.map(project =>(
            <Project 
                key={project.id}
                project={project}
            />
        ))}
    </ul>
  );
};

export default ProjectList;
