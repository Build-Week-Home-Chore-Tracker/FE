import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ParentTaskList from './Components/ParentTaskList';
import ChildTaskList from './Components/ChildTaskList';
// import Signin from './Components/Signin';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/Login" component={SignIn} />
          <PrivateRoute exact path="/ChildTaskList" component={ChildTaskList} />
          <PrivateRoute exact path="/ParentTaskList" component={ParentTaskList} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
