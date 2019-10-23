import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";



// const initialData = [ {
//   taskName: "Laundry"
// },
// {
//   taskName: "Dishes"
// },
// {
//   taskName: "Cleaning"
// }
// ]
 
const ParentTaskList = () => {
    const [chores, setChores] = useState([]);
    // const [users, setUsers] = useState([]);
    // const [addTask, setAddTask] = useState([]);

    useEffect(() => {
    axiosWithAuth()
    .get("/chores")
    .then(res => {
      console.log(res.data);
      setChores(res.data);
    }).catch(err => console.log(err))

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
          {chores.map(chore => (
            <div>
              <div className="chore-card">{chore.choreName} 
              <button className="chore-btn">Edit</button>
              <button className="chore-btn">Delete</button>
               </div>

           </div>
            ))
          }
        </div>
        </>
      );


    

  
}



export default ParentTaskList;
