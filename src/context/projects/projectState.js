import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

//Types
import { PROJECT_FORM } from '../../types';

const ProjectState = props => {
    //Defeinir el state incial com en redux
    const initialState = {
        projects: [
            { id: 1, name: 'Tienda virtual' },
            { id: 2, name: 'Intranet' },
            { id: 3, name: 'Diseño del sitio web' },
            { id: 4, name: 'MERN' }
        ],
        formProject: false //Que cuando cambia a true, se mostrará en el sidebar los demas componentes
    };

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState);

    //Serie de funciones para el CRUD
    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        });
    };


    //Retornamos con el context
    return(
        <projectContext.Provider value={{
            projects: state.projects,
            formProject: state.formProject,
            showForm
            }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;