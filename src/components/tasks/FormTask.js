import React, { useContext } from 'react';
import ProjectContext from "../../context/projects/projectContext";

const FormTask = () => {
    //Para extraer si algun proyecto esta activo
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

   //Si no hay proyecto seleccionado
   if(!project)return null;

   //Array destructuring para extraer el proyecto actual
   const [actualProject] = project;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Nombre de la tarea" name="name"/>
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn tbn-primario btn-submit btn-block" value="Agregar tarea"/>
                </div>
            </form>
        </div>
    );
};

export default FormTask;