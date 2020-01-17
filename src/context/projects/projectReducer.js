//Types
import { PROJECT_FORM, GET_PROJECT, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        formProject: true
      };
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        formProject: false,
        errorForm: false
      };
    case VALIDATE_FORM:
        return{
            ...state,
            errorForm: true
        }
    case ACTUAL_PROJECT:
        return{
            ...state,
            selectedProject: state.projects.filter(project => project.id === action.payload)
        }
    default:
      return state;
  }
};
