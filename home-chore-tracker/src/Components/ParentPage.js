import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";


const ParentPage = () => {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
    axiosWithAuth()
    .get("/users/all")
    .then(res => {
      console.log(res.data);
      setUsers(res.data);
    }).catch(err =>  console.err(err))

    }, [])
    return (
        <div className="parent-page">
         <h1>Welcome to Parent Home Chore Tracker</h1>
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
      );

}



export default ParentPage;
