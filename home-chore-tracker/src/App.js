import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ParentTaskList from './Components/ParentTaskList';
// import Signin from './Components/Signin';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={ (props) =>
        <>
          <nav>
          <Link to="/ParentTaskList">Parent Tasks</Link>
          </nav>
          <nav>
          <Link to="/ChildTaskList">Child Tasks</Link>
          </nav>
          <h1>Welcome to Home Chore Tracking App</h1>
        
        </>
      }/>

      <PrivateRoute exact path="/ParentTaskList" component={ParentTaskList} />
    </div>
    </Router>
  );
}
export default App;
