import React , { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import { Card, Row, Button } from 'reactstrap';

  const SignIn = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);
  
    return (
      <div className="Onboard-form">
        
            <Card body inverse color="success" className="text-center">
                <Form className = "row-container">
                    <Row>
                        <Field 
                            type="text" 
                            name="email" 
                            placeholder="email" />
                            {touched.email && errors.email && (
                            <p className="error">{errors.email}</p>
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
                    
                    {/* <Row>
                        <label className="checkbox-container">
                            Terms of Service
                            <Field
                            type="checkbox"
                            name="terms"
                            checked={values.terms}
                            />
                            <span className="checkmark" />
                        </label>
                    </Row> */}
                    
                    <Row className ="button-row">
                        <Button color="warning" type="submit">Sign In</Button>
                        <Button color="warning" type="submit">Sign Up</Button>
                    </Row>

                    {/* <Row>
                    </Row> */}
                </Form>
            </Card>
        
       
      </div>
    );
  };

  const FormikSignIn = withFormik({mapPropsToValues({email, password, terms}) {
      return {
        email: email || "",
        password: password || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      email: Yup.string().required("email is required"),
      password: Yup.string().required("Password is required")   
     }),
  
    // handleSubmit(values, { setStatus }) {
    //   axios
    //     // values is our object with all our data on it.
    //     .post("https://reqres.in/api/users/", values)
    //     .then(res => {
    //       setStatus(res.data);
    //       console.log(res);
    //     })
    //     .catch(err => console.log(err.response));
    // }
  })(SignIn); // currying functions in Javascript
 export default FormikSignIn;