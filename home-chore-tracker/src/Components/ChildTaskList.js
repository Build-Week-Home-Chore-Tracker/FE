import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import Points from "./Points"


function ChildTaskList() {
  const [chores, setChores] = useState([]);

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
     <div className="family-tasks">
       <h1>Child Home Chore Tracker</h1>
        {/* {chores.map(chore => (
          <div>
            <div className="chore-card">{chore.choreName} 
            <button className="chore-btn">mark as done</button>
         </div>
     </div>
      ))
        } */}

        <div className="chore-list">
           <h3>Chore List</h3>
           <p>Laundry X</p>
           <p>Wipe Floors X</p>
           <p>Dishwashing X </p>
         </div>

         <Points />

      </div>
      </>
    );


}


export default ChildTaskList;

