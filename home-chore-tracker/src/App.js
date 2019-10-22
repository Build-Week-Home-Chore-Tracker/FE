import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ParentPage from './Components/ParentPage';
// import Signin from './Components/Signin';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <PrivateRoute exact path="/ParentPage" component={ParentPage} />
    <h1>Welcome to Home Chore Tracking App</h1>
    </div>
    </Router>
  );
}
export default App;
