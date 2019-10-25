import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../utils/axiosWithAuth";
import Points from "./Points/Points";
import { Link } from "react-router-dom";
// import { Checkbox } from 'react-bootstrap';
import ListTasks from './ListTasks/ListTasks'
import Loader from "react-loader";
import { connect } from "react-redux";



class ChildTaskList extends React.Component {
  componentDidMount() {
      // this.props.list_tasks()
  }

  render() {

  return (
    <>
     <div className="family-tasks">
     {/* <Link to="/ParentTaskList"><button>Assign Tasks</button></Link> */}
       <h1>Child Home Chore Tracker</h1>
       <ListTasks />
        
       <Points />

      </div>
      </>
    )
  }


}

const mstp = state => {
  console.log('mapping in ChildTaskList')
  return {
  }
  
}

export default connect(mstp, {  })(ChildTaskList);

