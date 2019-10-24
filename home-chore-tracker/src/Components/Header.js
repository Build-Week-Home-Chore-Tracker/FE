import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">CHORE TRACKER</h1>
      <nav className = "links">          
          <Link to="/signin"> <Button color="success"> Login </Button></Link>
          <Link to="/signup"> <Button color="success"> Register </Button> </Link>
          <Link to="/ParentTaskList"> <Button color="success"> Parent Dashboard </Button> </Link>
          <Link to="/ChildTaskList"> <Button color="success"> Child Dashboard </Button> </Link> 
        </nav>
    </header>
  );
}