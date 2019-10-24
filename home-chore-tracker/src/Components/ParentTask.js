import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialChore = {
  choreName: ""
};

const ParentTask = ({ chores, updateChores }) => {
  console.log(chores);
  const [editing, setEditing] = useState(false);
  const [choreToEdit, setChoreToEdit] = useState(initialChore);
  const [choreAddNew, setChoreAddNew] = useState(initialChore);
  
  const editChore = chore => {
    setEditing(true);
    set
    choreToEdit(chore);
  };

  // const addChore = chore => {
  //   setChoreAddNew(chore);
  // };


  const saveEdit = e => {
    console.log('save edit!');
    e.preventDefault();
    axiosWithAuth()
    .put(`/chores/${choreToEdit.id}`, {chore: choreToEdit.choreName})
    .then(res => {console.log(res)})
    .catch(err => console.log(err.response));

    setEditing(false);
    const updatedChores = chores.map(chore => {
      if (chore.id === choreToEdit.id) {
        return {...chore, chore: choreToEdit.choreName}
      } else {
        return color;
      }
    }) 
    updateChores(updatedChores);   
  };

  const deleteChore = chore => {
    // e.preventDefault();
   axiosWithAuth()
    .delete(`/chores/${chore.id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err.response));



    const addNewChore = chore => {
      axiosWithAuth()
      .post("/chores", choreAddNew)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
   }



    const remainingChores =[];
    chores.forEach(chore => {
      if (chore.id !== choreToEdit.id) {
        remainingChores.push(chore);
      }
    });
    updateChores(remainingChores);
  };

  return (
    <div className="chores-wrap">
      <p>chores</p>
      <ul>
        {chores.map(chore => (
          <li key={chore.chore} onClick={() => editChore(chore)}>
            <span>
              <span className="delete" onClick={() => deleteChore(chore)}>
                x
              </span>{" "}
              {chore.chore}
            </span>
    
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit chore</legend>
          <label>
            chore name:
            <input
              onChange={e =>
                setChoreToEdit({ ...choreToEdit, chore: e.target.value })
              }
              value={choreToEdit.chore}
            />
          </label>
  
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

   
      {editing && (
        <form onSubmit={addNewChore}>

          <legend>add chore</legend>
          <label>
            chore name:
            <input
              onChange={e =>
                setChoreAddNew({ 
                  ...choreAddNew, chore: e.target.value })
              }
              value={choreAddNew.chore}
            />
          </label>
          <div className="button-row">
            <button type="submit">add</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ParentTask;

