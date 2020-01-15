import React from "react";
import Project from "./Project";

const ProjectList = () => {

    const projects = [
        {name: 'Tienda virtual'},
        {name: 'Intranet'},
        {name: 'Diseño del sitio web'}
    ];

  return (
    <ul className="listado-proyectos">
        {projects.map(project =>(
            <Project 
                project={project}
            />
        ))}
    </ul>
  );
};

export default ProjectList;
