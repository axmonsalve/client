import React, { useContext } from 'react';
import ProjectContext from "../../context/projects/projectContext";

const FormTask = () => {
    //Para extraer si algun proyecto esta activo
  const projectsContext = useContext(ProjectContext);
  const { selectedProject } = projectsContext;

   //Si no hay proyecto seleccionado
   if(!selectedProject)return null;

   const onSubmitAddTask = e => {
       e.preventDefault();

       //Validar

       //Pasar la validación

       //Agregar la tarea al state de tareas

       //reiniciar el form
   }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmitAddTask}
            >
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