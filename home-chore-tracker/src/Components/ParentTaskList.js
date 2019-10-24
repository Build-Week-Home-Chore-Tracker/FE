import React, { useState, useEffect, forceUpdate } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
// import ChildTaskList from './ChildTaskList';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import ParentChoreSearch from './ParentChoreSearch';



const ParentTaskList = () => {
    const [chores, setChores] = useState([]);
    const [choreId, setChoreId] = useState();
    const [assignedChores, setAssignedChores] = useState([]);
    const [editing, setEditing] = useState(false);

    const findChoreName = id => {
      return chores.filter(c => c.choreId == id)[0].choreName;
    }

    const fetchAssignedChores = () => {
      axiosWithAuth()
      .get("/assign/all")
      .then(res => {
        console.log(res.data);
        console.log(localStorage.getItem('userId'))
        const myChores = res.data.filter(c => c.userId == localStorage.getItem('userId'));
        console.log("Assinging:")
        console.log(myChores)
        setAssignedChores(myChores);
      }).catch(err => console.log(err))
    }

    useEffect(() => {
        axiosWithAuth()
        .get("/chores")
        .then(res => {
          console.log(res.data);
          setChores(res.data);
        }).catch(err => console.log(err))
  
        fetchAssignedChores();

    }, [])

    const assignChoreHandle = e => {
      // e.preventDefaut();
      console.log("Assigning!");
      // return false;
      axiosWithAuth()
      .post(`assign/user/${localStorage.getItem('userId')}`, {choreId: choreId})
      .then(res => {
        console.log('assigned the chore');
        fetchAssignedChores();
      }).catch(err => console.log(err))
    }




    const handleSelectChange = event => {
      console.log(event.target.value);

      setChoreId(event.target.value);
    }

    const deleteChore = chore => {
      // e.preventDefault();
     axiosWithAuth()
      .delete(`/assign/user/chore/${chore.choreListId}/delete`) 
      .then(res => {
        console.log(res);
        fetchAssignedChores();
      })
      .catch(err => console.log(err.response));
    }

    return (
      <>


        <div className="family-tasks">
        <div>
        <Link to="/ChildTaskList"><button>Child Task List</button></Link>
      </div>
         <h1>Family Home Chore Tracker</h1>
          

            <select onChange={handleSelectChange}>
            {chores.map(chore => (
           <option value={chore.choreId}>{chore.choreName}</option>
            ))
            }
            </select>
            <button className="chore-btn" onClick={assignChoreHandle}>Assign Chore</button>


         <div className="chore-list">
           <h3>Chore List</h3>
           {assignedChores.map(chore => (
              <div>{findChoreName(chore.choreId)}
             <span> ✏  </span>
             <span className="delete" onClick={() => deleteChore(chore)}> X </span> 
             <hr/>
             </div>
             ))
           }
         </div>
        </div>
        </>
      );
}



export default ParentTaskList;

