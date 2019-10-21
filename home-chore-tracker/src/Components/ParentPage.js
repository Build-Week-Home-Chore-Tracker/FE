import React, { useState, useEffect } from 'react';
import axiosWithAuth from "./utils/axiosWithAuth";


const ParentPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    axiosWithAuth()
    .get("//api/users/all")
    .then(res => {
      console.log(res.data);
      setTasks(res.data);
    }).catch(err =>  console.err(err))
    }, [])
    return (
        <div className="parent-page">
         <h1>Welcome to Parent Home Chore Tracker</h1>
        </div>
      );

}


export default ParentPage;
