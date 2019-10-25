import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../../utils/axiosWithAuth";
import { connect } from "react-redux";



  class Points extends React.Component {
    
  //   constructor() {
  //     super();
  //     this.state = {
  //         tasks: []
  //     }
  // }
  // function Points() {
  //   const [points, setPoints] = useState(initialPoints);

  
  // useEffect(() => {
  //   axiosWithAuth()
  //   .get(`/chores/user/2/points`)
  //   .then(res => {
  //     console.log(res.data);
  //     setPoints(res.data[0]);
  // }).catch(err => console.log(err))
  // }, [])
  
  totalPoints = () => {
    console.log('totalPoints');
    console.log(this.props.tasks)
    return this.props.tasks.reduce((total, task) => {
      if (task.completed) {
        return total + task.chorePointValue;
      } else {
        return total;
      }
    }, 0)
    
  }
  render() {

  return (
    <>
     <div className="points">
       <h1>Points</h1>
       {this.totalPoints()}
       
      </div>
      </>
    );
  }

}


const mstp = state => {
  console.log('Mapping in points')
  console.log(state.tasks);
  return {
      tasks: state.tasks,
  }
  
}

export default connect(mstp, {  })(Points);
