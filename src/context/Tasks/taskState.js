import React, { useReducer } from "react";

import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT, ADD_TASK } from "../../types";

const TaskState = props => {
  const initialState = {
    tasks: [
      { name: "Elegir plataforma", stateTask: true, projectId: 1 },
      { name: "Elegir colores", stateTask: false, projectId: 2 },
      { name: "Elegir plataformas de pago", stateTask: false, projectId: 3 },
      { name: "Elegir hosting", stateTask: true, projectId: 4 },
      { name: "Elegir plataforma", stateTask: true, projectId: 2 },
      { name: "Elegir colores", stateTask: false, projectId: 3 },
      { name: "Elegir plataformas de pago", stateTask: false, projectId: 1 },
      { name: "Elegir hosting", stateTask: true, projectId: 4 },
      { name: "Elegir plataforma", stateTask: true, projectId: 3 },
      { name: "Elegir colores", stateTask: false, projectId: 1 },
      { name: "Elegir plataformas de pago", stateTask: false, projectId: 2 },
      { name: "Elegir hosting", stateTask: true, projectId: 4 }
    ],
    projecttasks:null
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

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projecttasks: state.projecttasks,
        getTaskFn,
        addTaskFn
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
