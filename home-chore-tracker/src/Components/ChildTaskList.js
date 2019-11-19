import React from 'react';
import Points from "./Points/Points";
import ListTasks from './ListTasks/ListTasks'
import { connect } from "react-redux";



class ChildTaskList extends React.Component {
  componentDidMount() {
  }

  render() {

  return (
    <>
    <h1 className="main-header">Child home chore tracker</h1>
     <div className="child-chores">

        <div className="chore-list"> 
          <ListTasks />
        </div>
      
       <div className="rewards-list">
         <h3 className="main-header">Rewards List</h3>
         <p>10 Points🌟 <span className="dash">|</span> Choose a family activity  </p>
         <p>20 Points🌟 <span className="dash">|</span>   An extra story at bedtime </p>
         <p>30 Point🌟  <span className="dash">|</span>  Ice Cream or Cake</p>
         <p>40 Points🌟  <span className="dash">|</span> Movie  night  </p>
         <p>50 Point 🌟🌟 <span className="dash">|</span> Trip to park  </p> 
         <p>60 Points🌟🌟 <span className="dash">|</span>  1 hour of exrta screen time </p>
         <p>70 Points🌟🌟 <span className="dash">|</span> No chore of your choice, valid for 1 chore only  😻 </p>
         <p>80 Points🌟🌟🌟 <span className="dash">|</span> Trip to a zoo </p>
         <p>80 Points🌟🌟🌟🌟 <span className="dash">|</span> Trip to a zoo </p>
         <p>90 Points🌟🌟🌟🌟 <span className="dash">|</span> Sleep over party with friends </p>
         <p>100 Points🌟🌟🌟🌟🌟 <span className="dash">|</span> Trip to Disney Land</p>
       </div>
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

