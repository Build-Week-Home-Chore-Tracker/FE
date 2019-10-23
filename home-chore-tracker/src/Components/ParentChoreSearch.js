import React from 'react';
import { withFormik, Form, Field } from "formik";
// import ParentTaskList from "./Components/ParentTaskList";

const choreSearchForm = props => {
  console.log(props.chores);
  console.log(props.handler);
return (
    <section className="search-form">
      <Form handler={props.handler} chores={props.chores}>
        <Field>
          {props.chores.map(chore => (
            <option value={chore.choreName}>{chore.choreName}</option>
          ))}
        </Field>
        <button>Add</button>
      </Form>
    </section>
  );
};

const ParentChoreSearch = withFormik({
  handleSubmit(values, { props }) {
    const chores = props.chores;
    const filtered = chores.filter(x => {
      return x.choreName.indexOf(values.Search) > -1;
    });

    props.handler(filtered);
  }
})(choreSearchForm);

export default ParentChoreSearch;
