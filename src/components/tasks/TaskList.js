import React, { Fragment } from 'react';
import Task from './Task';

const TaskList = () => {

    const tasks = [
        {name: 'Elegir plataforma', stateTask: true},
        {name: 'Elegir colores', stateTask: false},
        {name: 'Elegir plataformas de pago', stateTask: false},
        {name: 'Elegir hosting', stateTask: true},
    ]

    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                {tasks.length === 0 
                ? (
                    <li className="tarea"><p>No hay tareas</p></li>
                ): tasks.map(task => (
                    <Task 
                        task={task}
                    />
                ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar proyecto &times;</button>
        </Fragment>
    );
};

export default TaskList;