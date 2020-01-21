import React, { useReducer } from "react";

import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATE_TASK } from "../../types";

const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 1, nametask: "Elegir plataforma", stateTask: true, projectId: 1 },
      { id: 2, nametask: "Elegir colores", stateTask: false, projectId: 2 },
      { id: 3, nametask: "Elegir plataformas de pago", stateTask: false, projectId: 3 },
      { id: 4, nametask: "Elegir hosting", stateTask: true, projectId: 4 },
      { id: 5, nametask: "Elegir plataforma", stateTask: true, projectId: 2 },
      { id: 6, nametask: "Elegir colores", stateTask: false, projectId: 3 },
      { id: 7, nametask: "Elegir plataformas de pago", stateTask: false, projectId: 1 },
      { id: 8, nametask: "Elegir hosting", stateTask: true, projectId: 4 },
      { id: 9, nametask: "Elegir plataforma", stateTask: true, projectId: 3 },
      { id: 10, nametask: "Elegir colores", stateTask: false, projectId: 1 },
      { id: 11, nametask: "Elegir plataformas de pago", stateTask: false, projectId: 2 },
      { id: 12, nametask: "Elegir hosting", stateTask: true, projectId: 4 }
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
  };

  //Eliminando una tarea
  const deleteTaskFn = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  };

  //Cambia el estado de cada tarea
  const changeStateTaskFn = task => {
    dispatch({
      type: STATE_TASK,
      payload: task
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
        addTaskFn,
        deleteTaskFn,
        changeStateTaskFn
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
