import React from "react";
import Loader from "react-loader";
import { connect } from "react-redux";
import { addChore } from "../../actions";


class AddChore extends React.Component {
    
    constructor() {
        super();
        this.state = {
            choreName: "",
            chorePoints: ""
        }
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    addNewChore = e => {
        e.preventDefault();
        this.props.addChore(this.state.choreName, this.state.chorePoints)
    }

    render() {
    
        return <div className="chores-wrap">
        

            <form onSubmit={this.addNewChore}>

              {/* <legend>add chore</legend> */}
              <label>
                chore name:
                <input 
                        type=          "text"
                        name=          "choreName"
                        placeholder=   "choreName"
                        value=         {this.state.choreName}
                        onChange=      {this.handleChanges}
                    />

              </label>
              <label>Chore points:
                  <select name="chorePoints" onChange={this.handleChanges}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                  </select>
              </label>
              <button type="submit">add</button>
            </form>
        </div>
    }
}

const mstp = state => {
    return {
    }
    
}

export default connect(mstp, { addChore })(AddChore);