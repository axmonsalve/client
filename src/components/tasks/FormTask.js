import React, { useContext, useState } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/Tasks/taskContext";

const FormTask = () => {
  //Para extraer si algun proyecto esta activo
  const projectsContext = useContext(ProjectContext);
  const { selectedProject } = projectsContext;

  //Obtener la/s funcion/es del context de tarea
  const tasksContext = useContext(TaskContext);
  const { addTaskFn } = tasksContext;

  //State
  const [task, getTask] = useState({
    nametask: ""
  });

  const { nametask } = task;

  //Si no hay proyecto seleccionado
  if (!selectedProject) return null;

  const hadleChange = e => {
    getTask({
        ...task,
        [e.target.name]: e.target.value
    })
  };

  const [actualProject] = selectedProject;

  const onSubmitAddTask = e => {
    e.preventDefault();

    //Validar

    //Pasar la validación

    //Agregar la tarea al state de tareas
    task.projectId = actualProject.id;
    task.stateTask = false;
    addTaskFn(task);

    //reiniciar el form
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmitAddTask}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la tarea"
            name="nametask"
            value={nametask}
            onChange={hadleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn tbn-primario btn-submit btn-block"
            value="Agregar tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
