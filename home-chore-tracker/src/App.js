import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParentTaskList from './Components/ParentTaskList';
import ChildTaskList from './Components/ChildTaskList';
// import Signin from './Components/Signin';
// import PrivateRoute from './Components/PrivateRoute';
import './App.css';
import SignIn from './Components/SignIn';
import FamilyPage from './Components/FamilyPage';
import SignUp from './Components/SignUp';
import ChildTaskList from './Components/ChildTaskList'

function App() {
  return (
     <Router>
      <div className="app">
        <Header />        
        
        <Switch>
          <Route path="/Login">
            <SignIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <PrivateRoute exact path="/ParentTaskList">
            <ParentTaskList />
          </Route>

          <PrivateRoute exact path="/ChildTaskList">
            <ChildTaskList />
          </Route>
    
          <PrivateRoute exact path="/FamilyPage">
              <FamilyPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
