import React , { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import { Card, Row, Button, FormGroup, Label, Input, Col} from 'reactstrap';
import axios from 'axios';

  const SignUp = ({ errors, touched, values, status } ) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);
   
  
    return (
      <div className="Onboard-form">
        
            <Card body inverse color="success" className="text-center">
                <Form className= "row-container">
                  <h4 className="signup-header">Please Register</h4>
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
                            name="name" 
                            placeholder="name" />
                            {touched.username && errors.name && (
                            <p className="error">{errors.name}</p>
                            )}
                    </Row>

                    <Row>
                        <Field 
                            type="text" 
                            name="familyNameID" 
                            placeholder="Family Name" />
                            {touched.familyNameID && errors.familyNameID && (
                            <p className="error">{errors.familyNameID}</p>
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

                    <Row>
                        <FormGroup row>
                            <Label for="roleSelect">Role: </Label>
                            <Col sm={10}>
                                <Input type="select" name="role" id="roleSelect">
                                    <option>Parent</option>
                                    <option>Child</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </Row>

                    <Row className ="button-row">
                        <Button color="primary" type="submit">Register</Button>
                    </Row>

                </Form>
            </Card>

      </div>
    );
  };

  const FormikSignUp = withFormik({mapPropsToValues({username, name, familyNameID, password}) {
      return {
        username: username || "",
        name: name || "",
        familyNameID: familyNameID || "",
        password: password || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      username: Yup.string().required("username is required"),
      name: Yup.string().required("name is required"),
      familyNameID: Yup.string().required("Family Name is required"),
      password: Yup.string().required("Password is required")   
     }),
  
    handleSubmit(values, { setStatus }) {

      // const {history} = this.props;
      console.log("this.props")
      axios
        // values is our object with all our data on it.
        .post("https://home-chore-tracker88.herokuapp.com/api/auth/register", values)
        .then(res => {
          console.log(res);
          setStatus(res.data);
          console.log(res.status);
          window.location = "/signin"

        })
        .catch(err => console.log(err.response));
    }
  })(SignUp); // currying functions in Javascript
 export default FormikSignUp;