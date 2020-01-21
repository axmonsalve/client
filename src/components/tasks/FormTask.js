import React, { useContext, useState } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/Tasks/taskContext";

const FormTask = () => {
  //Para extraer si algun proyecto esta activo
  const projectsContext = useContext(ProjectContext);
  const { selectedProject } = projectsContext;

  //Obtener la/s funcion/es del context de tarea
  const tasksContext = useContext(TaskContext);
  const { errortask, addTaskFn, validateTaskFn, getTaskFn } = tasksContext;

  //State
  const [task, setTask] = useState({
    nametask: ""
  });

  const { nametask } = task;

  //Si no hay proyecto seleccionado
  if (!selectedProject) return null;

  const hadleChange = e => {
    setTask({
        ...task,
        [e.target.name]: e.target.value
    })
  };

  const [actualProject] = selectedProject;

  const onSubmitAddTask = e => {
    e.preventDefault();

    //Validar
    if(nametask.trim() === ''){
        validateTaskFn();
        return;
    }

    //Agregar la tarea al state de tareas
    task.projectId = actualProject.id;
    task.stateTask = false;
    addTaskFn(task);

    //Obtener y filtrar las tareas del proyecto actual
    getTaskFn(actualProject.id);

    //reiniciar el form
    setTask({
        nametask: ""
    })
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
      {errortask? <p className="mensaje error">Debes asignar un nombre a la tarea</p> :null}
    </div>
  );
};

export default FormTask;
