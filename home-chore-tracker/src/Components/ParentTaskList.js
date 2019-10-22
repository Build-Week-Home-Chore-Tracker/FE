import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";

const initialData = [ {
  task: "Laundry"
},
{
  task: "Dishes"
},
{
  task: "Cleaning"
}
]
 


const ParentTaskList = () => {
    const [tasks, setTasks] = useState([]);
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
          {users.map(user => (
            <div>
              <h3>{user.name}</h3>
              <div>{user.familyName}</div>
              <div>{user.username}</div>
              <div>{user.role}</div>
           </div>
            ))
          }
        </div>
        </>
      );


    

  
}



export default ParentTaskList;
