import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">CHORE TRACKER APP</h1>
      <nav>          
          <Link to="/signin">Login</Link>
          <Link to="/signup">Register</Link>
          <Link to="/parenttasklist">Parent Dashboard</Link>
          <Link to="/childtasklist">Child Dashboard</Link> 
        </nav>
    </header>
  );
}