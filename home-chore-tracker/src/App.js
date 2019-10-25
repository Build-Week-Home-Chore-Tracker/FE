import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ParentTaskList from './Components/ParentTaskList';
import ChildTaskList from './Components/ChildTaskList';
// import Signin from './Components/Signin';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import FamilyPage from './Components/FamilyPage';
import ManageChoresPage from './Components/ManageChoresPage'

function App() {
  return (
    <div className="App">     
      <Router>
        
        <Header />

        <Switch>
      
          {/* <Route exact path="/" component={SignIn} /> */}
          <Route path="/signin" component={SignIn} />
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/FamilyPage" component={FamilyPage} />
          <PrivateRoute exact path="/ChildTaskList" component={ChildTaskList} />
          <PrivateRoute exact path="/ParentTaskList" component={ParentTaskList} />
          <PrivateRoute exact path="/ManageChores" component={ManageChoresPage} />

          {/* <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <PrivateRoute exact path="/FamilyPage" component={FamilyPage} />
          <PrivateRoute exact path="/ChildTaskList" component={ChildTaskList} />
          <PrivateRoute exact path="/ParentTaskList" component={ParentTaskList} /> */}
        
        </Switch>
      </Router>
    </div>
  );
}
export default App;
