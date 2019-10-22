import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ParentTaskList from './Components/ParentTaskList';
// import Signin from './Components/Signin';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';
import Header from './Components/Header';
import SignIn from './Components/SignIn';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <SignIn />
      <Route exact path="/" component={ (props) =>
        <>
          <nav>
          <Link to="/ParentTaskList">Parent Tasks</Link>
          </nav>
          <nav>
          <Link to="/ChildTaskList">Child Tasks</Link>
          </nav>
         
        
        </>
      }/>

      <PrivateRoute exact path="/ParentTaskList" component={ParentTaskList} />
    </div>
    </Router>
  );
}
export default App;
