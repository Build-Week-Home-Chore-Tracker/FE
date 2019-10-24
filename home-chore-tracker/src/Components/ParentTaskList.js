import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
// import ChildTaskList from './ChildTaskList';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import ParentChoreSearch from './ParentChoreSearch';

const ParentTaskList = () => {
    const [chores, setChores] = useState([]);
    const [editing, setEditing] = useState(false);


    useEffect(() => {
    axiosWithAuth()
    .get("/chores")
    .then(res => {
      console.log(res.data);
      setChores(res.data);
    }).catch(err => console.log(err))

    }, [])


    return (
      <>
        {/* <div>    
        <form>
        <hr />
          <label>Add Task</label>
          <input name='taskName'></input>
            <button>Add</button>
        </form>
        </div>
        <hr /> */}

        <div className="family-tasks">
         <h1>Family Home Chore Tracker</h1>
          {/* {chores.map(chore => (
            <div>
              <div className="chore-card">{chore.choreName} 
                <button className="chore-btn">Edit</button>
                <button className="chore-btn">Delete</button>
              </div>
            </div>
          ))
          } */}

          <form>
            <select>
            {chores.map(chore => (
              <option value={chore.choreName}>{chore.choreName}</option>
            ))
            }
            </select>
            <button className="chore-btn">Assign Chore</button>
          </form>
         <div className="chore-list">
           <h3>Chore List</h3>
           <p>Laundry X</p>
           <p>Wipe Floors X</p>
           <p>Dishwashing X </p>
         </div>
        </div>
        </>
      );


}



export default ParentTaskList;

