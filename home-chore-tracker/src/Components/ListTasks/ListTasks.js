import React from "react";
import Loader from "react-loader";
import { connect } from "react-redux";
import { list_tasks, update_task } from "../../actions";

import Points from "../Points/Points";

class ListTasks extends React.Component {
    componentDidMount() {
        this.props.list_tasks()
    }

    toggleCheckboxChange = e => {
        console.log(e.target.value)
        this.props.tasks.map(task => {
            console.log(task.choreName)
            //NO ID, using name :(
            if (task.choreName === e.target.value) {
                task.completed = !task.completed;
                // this.props.update_task()
                this.props.update_task(task)
            }
        })
        return true;
    }
    render() {
    
        return <div className="chores-wrap">
            {this.props.fetching ? <Loader color="#7bff00" /> : null}
            {this.props.tasks.map(task => (
                <div>
                    <label>
                 {task.choreName} 
                 {task.choreId} 
                    <input className="checkbox"
                    type="checkbox"
                    value={task.choreName}
                    checked={task.isDone}
                    onChange={this.toggleCheckboxChange}
                    />
                    </label>
                    <hr /> 
                </div>
                
            ))}

    <div className="chore-points">
       <Points />
      </div>
           </div>
    }
}

const mstp = state => {

    return {
        tasks: state.tasks,
        fetching: state.fetching
    }
    
}

export default connect(mstp, { list_tasks, update_task })(ListTasks);