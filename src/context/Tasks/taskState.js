import React, { useReducer } from "react";

import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT } from "../../types";

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
    ]
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

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        getTaskFn
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
