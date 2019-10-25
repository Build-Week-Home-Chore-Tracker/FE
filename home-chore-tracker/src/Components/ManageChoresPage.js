import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddChore from './AddChore/AddChore'
import ListChores from './ListChores/ListChores'


const initialChore = {
    choreName: ""
};

const ManageChoresPage = ({}) => {
    const [choreAddNew, setChoreAddNew] = useState(initialChore);

    const addNewChore = chore => {
        axiosWithAuth()
        .post("/chores", choreAddNew)
        .then(res => console.log(res))
        .catch(err => console.log(err.response));
    }

  return (
        <div className="chores-wrap">
            Chore management page
            <AddChore />
            
            <ListChores />
        </div>
  );
};

export default ManageChoresPage;

