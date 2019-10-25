import React , { useEffect, useState } from "react";
import axios from 'axios';
import {Card, CardImg, CardText, CardTitle, Row, Col} from 'reactstrap';
import { Link } from "react-router-dom"


function FamilyPage(props) {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getCharacters = () => {
      axios.get(' https://home-chore-tracker88.herokuapp.com/api/users/familyNameID')
      .then(response => {
        console.log(response);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }
    getCharacters();
  }, []);

  return (
    <section className="userDisplayCards">
      <div>
        <h2>Users</h2>
        <hr />

        <div className = "cards">
          {users.map(user => (
          <UserDetails key={user.id} user={user} />
          ))}
        </div>

      </div>

    </section>

  );
}


function UserDetails({user}) {
  const{name,familyNameID,role} = user;
  return(
    <div className = "individualCards">
      <Row>
        <Col sm="3">     
          <Card body className = "text-center">
            <CardTitle>Name: {name}</CardTitle>
            <CardText>Family Name: {familyNameID}</CardText>
            <CardText>Role: {role}</CardText>
          </Card>
        </Col>
      </Row>  
    </div>
  );
};


export default FamilyPage;




//Unused code that may be needed later on commented out by Daniel for Akak
{/* <h1 className="family-page">Welcome to family home chore tracker</h1>
      <div>
        <Link to="/ParentTaskList"><button>Assign Tasks</button></Link>
      </div>
      <div>
        <Link to="/ChildTaskList"><button>Child Task List</button></Link>
      </div> */}