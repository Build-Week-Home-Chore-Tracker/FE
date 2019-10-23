// import React, { useState } from "react";
// import axiosWithAuth from "../utils/axiosWithAuth";

// const initialChore = {
//   choreName: ""
// };

// const ParentTask = ({ chores, updateColors }) => {
//   console.log(colors);
//   const [editing, setEditing] = useState(false);
//   const [choreToEdit, setChoreToEdit] = useState(initialChore);
//   const [choreAddNew, setChoreAddNew] = useState(initialChore);
  
//   const editChore = chore => {
//     setEditing(true);
//     set
//     choreToEdit(chore);
//   };

//   const addChore = chore => {
//     setChoreAddNew(chore);
//   };

//     // Make a put request to save your updated color
//     // think about where will you get the id from...
//     // where is is saved right now?

//   const saveEdit = e => {
//     console.log('save edit!');
//     e.preventDefault();
//     axiosWithAuth()
//     .put(`/chores/${choreToEdit.id}`, {chore: choreToEdit.choreName})
//     .then(res => {console.log(res)})
//     .catch(err => console.log(err.response));

//     setEditing(false);
//     const updatedChoress = chores.map(chore => {
//       if (chore.id === choreToEdit.id) {
//         return {...chore, chore: choreToEdit.choreName}
//       } else {
//         return color;
//       }
//     }) 
//     updateChores(updatedChores);   
//   };
//    // make a delete request to delete this color
//      // // Make a put request to save your updated color
//     // // think about where will you get the id from...
//     // // where is is saved right now?

//   const deleteChore = chore => {
//     // e.preventDefault();
//    axiosWithAuth()
//     .delete(`/colors/${chore.id}`)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.response));


//     //Add New Color
    
//     const addNewChore = chore => {
//       axiosWithAuth()
//       .post("/chores", choreAddNew)
//       .then(res => console.log(res))
//       .catch(err => console.log(err.response));
//    }



//     const remainingChores =[];
//     chores.forEach(chore => {
//       if (chore.id !== choreToEdit.id) {
//         remainingChores.push(chore);
//       }
//     });
//     updateChores(remainingChores);
//   };

//   return (
//     <div className="chores-wrap">
//       <p>chores</p>
//       <ul>
//         {chores.map(chore => (
//           <li key={chore.chore} onClick={() => editChore(chore)}>
//             <span>
//               <span className="delete" onClick={() => deleteChore(chore)}>
//                 x
//               </span>{" "}
//               {chore.chore}
//             </span>
//             <div
//               className="color-box"
//               style={{ backgroundColor: color.code.hex }}
//             />
//           </li>
//         ))}
//       </ul>
//       {editing && (
//         <form onSubmit={saveEdit}>
//           <legend>edit color</legend>
//           <label>
//             chore name:
//             <input
//               onChange={e =>
//                 setChoreToEdit({ ...choreToEdit, chore: e.target.value })
//               }
//               value={choreToEdit.chore}
//             />
//           </label>
//           {/* <label>
//             hex code:
//             <input
//               onChange={e =>
//                 setColorToEdit({
//                   ...colorToEdit,
//                   code: { hex: e.target.value }
//                 })
//               }
//               value={colorToEdit.code.hex}
//             />
//           </label> */}
//           <div className="button-row">
//             <button type="submit">save</button>
//             <button onClick={() => setEditing(false)}>cancel</button>
//           </div>
//         </form>
//       )}

//     {/* stretch - build another form here to add a color */}
   
//       {editing && (
//         <form onSubmit={addNewChore}>

//           <legend>add chore</legend>
//           <label>
//             chore name:
//             <input
//               onChange={e =>
//                 setColorAddNew({ 
//                   ...choreAddNew, chore: e.target.value })
//               }
//               value={choreAddNew.color}
//             />
//           </label>
//           <label>
//             hex code:
//             <input
//               onChange={e =>
//                 setColorAddNew({
//                   ...colorAddNew,
//                   code: { hex: e.target.value }
//                 })
//               }
//               value={colorAddNew.code.hex}
//             />
//           </label>
//           <div className="button-row">
//             <button type="submit">add</button>
//             <button onClick={() => setEditing(false)}>cancel</button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ColorList;














// import React from 'react';
// import { withFormik, Form, Field } from "formik";
// // import ParentTaskList from "./Components/ParentTaskList";

// const choreSearchForm = props => {
//   console.log(props.chores);
//   console.log(props.handler);
// return (
//     <section className="search-form">
//       <Form handler={props.handler} chores={props.chores}>
//         <Field>
//           {props.chores.map(chore => (
//             <option value={chore.choreName}>{chore.choreName}</option>
//           ))}
//         </Field>
//         <button>Add</button>
//       </Form>
//     </section>
//   );
// };

// const ParentChoreSearch = withFormik({
//   handleSubmit(values, { props }) {
//     const chores = props.chores;
//     const filtered = chores.filter(x => {
//       return x.choreName.indexOf(values.Search) > -1;
//     });

//     props.handler(filtered);
//   }
// })(choreSearchForm);

// export default ParentChoreSearch;
