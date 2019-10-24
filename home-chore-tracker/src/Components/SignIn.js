import React , { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import { Card, Row, Button } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import SignUp from './SignUp';

  const SignIn = ({ errors, touched, values, status }, props) => {
    console.log(props)
    const [users, setUsers] = useState([]);
    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);

    // function showpage () {
    //   return <SignUp />
    // }
  
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
                    <Button color="warning" type="submit">Login</Button>
                    
                </Form>
                <Link to="/signup">
                <Button > Register </Button>
                </Link>

                
                {/* <Row className ="button-row">
                       <Button color="primary" type="submit">  
                        <Router>
                          
                          <Link to = "/signup"> 
                              Register
                         </Link>

                          <Switch>
                            <Route exact path = "/signup">
                              <SignUp />
                            </Route>
                          </Switch>
                          
                        </Router>
                      </Button>
                    </Row> */}
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
  
     
  })(SignIn); // currying functions in Javascript
 export default FormikSignIn;