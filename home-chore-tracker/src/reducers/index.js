
import { 
    CHORES_FETCH_START, CHORES_FETCH_DONE, CHORES_FETCH_ERROR,
    CHORES_ADD_START, CHORES_ADD_DONE, CHORES_ADD_ERROR,
    TASKS_LIST_START, TASKS_LIST_DONE, TASKS_LIST_ERROR,
    TASK_UPDATE} from "../actions"
const initialState = {
    chores: [],
    tasks: [],
    fetching: false
}

export const reducer = (state = initialState, action) => {
switch (action.type) {
    case CHORES_FETCH_START: {
        return {
            ...state,
            fetching: true
        }
    }
    case CHORES_FETCH_DONE: {
        return {
            ...state,
            fetching: false,
            chores: action.payload
        }
    }
    case CHORES_FETCH_ERROR: {
        return {
            ...state,
            fetching: false
        }
    }

    case CHORES_ADD_START: {
        return {
            ...state,
            fetching: true
        }
    }
    case CHORES_ADD_DONE: {
        return {
            ...state,
            chores: [...state.chores, action.payload],
            fetching: false
        }
    }
    
    case CHORES_ADD_ERROR: {
        return {
            ...state,
            chores: [...state.chores, action.payload], // uncomment after endpoint fixed
            fetching: false
        }
    }

    case TASKS_LIST_START: {
        return {
            ...state,
            fetching: true
        }
    }

    case TASKS_LIST_DONE: {
        return {
            ...state,
            tasks: action.payload,
            fetching: false
        }
    }
    case TASKS_LIST_ERROR: {
        return {
            ...state,
            fetching: false
        }
    }

    case TASK_UPDATE: {
        const updatedTask = action.payload;
        const updatedTasks = state.tasks.map(task => {
            console.log(task)
            if (task.choreName === updatedTask.choreName) {
                return updatedTask;
            } else {
                return task;
            }
        } );
        return {
            ...state,
            tasks: updatedTasks
        }
    }

default:
    return state;
}
}