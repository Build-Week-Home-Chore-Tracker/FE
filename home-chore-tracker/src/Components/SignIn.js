import React , { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import { Card, Row, Button } from 'reactstrap';
import axios from "axios";

  const SignIn = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);
  
    return (
      <div className="signInForm">         
        
            <Card body inverse color="success" className="text-center">
                <Form className = "row-container">
                    <Row>
                        <Field 
                            type="text" 
                            name="username" 
                            placeholder="username" />
                            {touched.username && errors.username && (
                            <p className="error">{errors.username}</p>
                            )}
                    </Row>
                    
                    <Row>
                        <Field 
                            type="text" 
                            name="password" 
                            placeholder="password" />
                            {touched.password && errors.password && (
                            <p className="error">{errors.password}</p>
                            )}
                    </Row>

                    <Button color="warning" type="submit">Login</Button> 
                </Form>
            </Card>
        
       
      </div>
    );
  };

  const FormikSignIn = withFormik({mapPropsToValues({username, password, terms}) {
      return {
        username: username || "",
        password: password || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      username: Yup.string().required("username is required"),
      password: Yup.string().required("Password is required")   
     }),
  
    handleSubmit(values, { props, setStatus }) {
      axios
        // values is our object with all our data on it.
        .post("https://home-chore-tracker88.herokuapp.com/api/auth/login", values)
        .then(res => {
          setStatus(res.data);
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          props.history.push('/FamilyPage')
        })
        .catch(err => console.log(err.response));
    }
  })(SignIn); // currying functions in Javascript
 export default FormikSignIn;