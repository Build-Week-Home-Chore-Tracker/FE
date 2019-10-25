import React from "react";
import Loader from "react-loader";
import { connect } from "react-redux";
import { fetch_chores } from "../../actions";


class ListChores extends React.Component {
    componentDidMount() {
        this.props.fetch_chores()
    }

    render() {
    
        return <div className="chores-wrap">
            Chores List
            {this.props.fetching ? <Loader color="#7bff00" /> : null}
            {this.props.chores.map(chore => (
                <div>{chore.choreName} : {chore.chorePointValue}</div>
            ))}

           </div>
    }
}

const mstp = state => {
    console.log('mapping in ListChores')
    return {
        chores: state.chores,
        fetching: state.fetching
    }
    
}

export default connect(mstp, { fetch_chores })(ListChores);