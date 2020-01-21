import React, { useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/Tasks/taskContext";

const Task = ({ task }) => {
  //Para extraer si algun proyecto esta activo
  const projectsContext = useContext(ProjectContext);
  const { selectedProject } = projectsContext;


  //Obtener la/s funcion/es del context de tarea
  const tasksContext = useContext(TaskContext);
  const { deleteTaskFn, getTaskFn } = tasksContext;

  //Extraer el proyecto actual
  const [actualProject] = selectedProject;

  // Función que se ejecuta cuando el usuario presiona el btn de eliminar tarea
  const onClickDelete = id => {
    deleteTaskFn(id);
    getTaskFn(actualProject.id);
  };

  return (
    <li className="tarea sombra">
      <p>{task.nametask}</p>
      <div className="estado">
        {task.stateTask ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
        >
          Editar
        </button>

        <button type="button" className="btn btn-secundario" onClick={() => onClickDelete(task.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
