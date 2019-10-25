import axiosWithAuth from "../utils/axiosWithAuth";


export const CHORES_FETCH_START = "CHORES_FETCH_START";
export const CHORES_FETCH_DONE = "CHORES_FETCH_DONE"
export const CHORES_FETCH_ERROR = "CHORES_FETCH_ERROR"

export const fetch_chores = () => dispatch => {
    dispatch({ type: CHORES_FETCH_START });
    console.log('fetching chores');
    axiosWithAuth()
    .get("/chores")
    .then(res => {
      console.log(res.data);
      dispatch({type: CHORES_FETCH_DONE, payload: res.data});
    }).catch(err =>  {
        console.log(err);
        dispatch({type: CHORES_FETCH_ERROR});
    })
}

export const CHORES_ADD_START = "CHORES_ADD_START";
export const CHORES_ADD_DONE = "CHORES_ADD_DONE"
export const CHORES_ADD_ERROR = "CHORES_CHORES_ADD_ERRORFETCH_ERROR"

export const addChore = (choreName, chorePointValue) => dispatch => {
    dispatch({ type: CHORES_ADD_START });
    console.log('adding chore');
    axiosWithAuth()
    .post("/chores/chore")
    .then(res => {
      console.log(res.data);
      dispatch({type: CHORES_ADD_DONE, payload: {choreName, chorePointValue}});
    }).catch(err =>  {
        console.log(err);
        // uncomment after api is fixed. Remove the line after.
        // dispatch({type: CHORES_ADD_ERROR});
        dispatch({type: CHORES_ADD_ERROR, payload: {choreName, chorePointValue}});
    })
}

export const TASKS_LIST_START = "TASKS_LIST_START";
export const TASKS_LIST_DONE = "TASKS_LIST_DONE"
export const TASKS_LIST_ERROR = "TASKS_LIST_ERROR"

export const list_tasks = (userId) => dispatch => {
    dispatch({ type: TASKS_LIST_START });
    console.log('getting list of tasks for userid ' + userId);
    axiosWithAuth()
      .get(`/assign/chores/user/${localStorage.getItem('userId')}`)
      .then(res => {
        console.log(res.data);
        dispatch({type: TASKS_LIST_DONE, payload: res.data});
    }).catch(err => {
      console.log(err)
      dispatch({type: TASKS_LIST_ERROR})
    })
}

export const TASK_UPDATE = "TASK_UPDATE";
export const update_task = (task) => dispatch => {
  dispatch({ type: TASK_UPDATE,   payload: task});
}