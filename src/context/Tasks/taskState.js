import React, { useReducer } from "react";

import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK } from "../../types";

const TaskState = props => {
  const initialState = {
    tasks: [
      { nametask: "Elegir plataforma", stateTask: true, projectId: 1 },
      { nametask: "Elegir colores", stateTask: false, projectId: 2 },
      { nametask: "Elegir plataformas de pago", stateTask: false, projectId: 3 },
      { nametask: "Elegir hosting", stateTask: true, projectId: 4 },
      { nametask: "Elegir plataforma", stateTask: true, projectId: 2 },
      { nametask: "Elegir colores", stateTask: false, projectId: 3 },
      { nametask: "Elegir plataformas de pago", stateTask: false, projectId: 1 },
      { nametask: "Elegir hosting", stateTask: true, projectId: 4 },
      { nametask: "Elegir plataforma", stateTask: true, projectId: 3 },
      { nametask: "Elegir colores", stateTask: false, projectId: 1 },
      { nametask: "Elegir plataformas de pago", stateTask: false, projectId: 2 },
      { nametask: "Elegir hosting", stateTask: true, projectId: 4 }
    ],
    projecttasks:null,
    errortask: false
  };

  //Crear Dispatch y el state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //********FUNCIONES**********//

  //Obtener las tareas del proyecto
  const getTaskFn = projectId => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId
    });
  };

  //Agregar una tarea al proyecto seleccionado
  const addTaskFn = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  }

  //Valida y muestra un error en caso necesario
  const validateTaskFn = () => {
    dispatch({
      type: VALIDATE_TASK
    });
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projecttasks: state.projecttasks,
        errortask: state.errortask,
        validateTaskFn,
        getTaskFn,
        addTaskFn
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
