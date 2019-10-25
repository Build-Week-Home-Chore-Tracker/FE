import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Header() {
  return (
    <header className="ui centered">
     
      <nav className="links"> 
      <h5 className="ui center">CHORE TRACKER</h5>    
          <Link to="/FamilyPage"> <Button color="success"> Family Page </Button> </Link>      
          <Link to="/ParentTaskList"> <Button color="success"> Parent Dashboard </Button> </Link>
          <Link to="/ChildTaskList"> <Button color="success"> Child Dashboard </Button> </Link>
          <Link to="/ManageChores"> <Button color="success"> Chore Management </Button> </Link> 
          <Link to="/signup"> <Button color="success"> Register </Button> </Link>
          <Link to="/signin"> <Button color="success"> Login </Button></Link>

        </nav>
    </header>
  );
}