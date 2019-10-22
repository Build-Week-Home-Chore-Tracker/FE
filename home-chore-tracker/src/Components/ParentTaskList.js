import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";



const initialData = [ {
  taskName: "Laundry"
},
{
  taskName: "Dishes"
},
{
  taskName: "Cleaning"
}
]
 
const ParentTaskList = () => {
    const [tasks, setTasks] = useState(initialData);
    const [users, setUsers] = useState([]);
    const [addTask, setAddTask] = useState([]);

    useEffect(() => {
    axiosWithAuth()
    .get("/users/all")
    .then(res => {
      console.log(res.data);
      setUsers(res.data);
    }).catch(err =>  console.err(err))

    }, [])

      //Add Task
    const addNewTask = (props) => {
      console.log(props);
    }

    return (
      <>
        <div>
        <form>
        <hr />
          <label>Add Task</label>
          <input name='taskName'></input>
            <button>Add</button>
        </form>
        </div>
        <hr />

        <div className="family-tasks">
         <h1>Family Home Chore Tracker</h1>
          {tasks.map(task => (
            <div>
              <div>{task.taskName} X </div>
           </div>
            ))
          }
        </div>
        </>
      );


    

  
}



export default ParentTaskList;
