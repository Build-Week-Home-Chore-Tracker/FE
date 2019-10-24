import React , { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import { Card, Row, Button, FormGroup, Label, Input, Col} from 'reactstrap';

  const SignUp = ({ errors, touched, values, status }) => {
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
                            name="familyname" 
                            placeholder="Family Name" />
                            {touched.familyname && errors.familyname && (
                            <p className="error">{errors.familyname}</p>
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

  const FormikSignUp = withFormik({mapPropsToValues({email,familyname, password, terms}) {
      return {
        email: email || "",
        familyname: familyname || "",
        password: password || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      email: Yup.string().required("email is required"),
      familyname: Yup.string().required("Family Name is required"),
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
  })(SignUp); // currying functions in Javascript
 export default FormikSignUp;