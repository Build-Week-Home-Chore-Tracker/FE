import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParentTaskList from './Components/ParentTaskList';
// import Signin from './Components/Signin';
// import PrivateRoute from './Components/PrivateRoute';
import './App.css';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ChildTaskList from './Components/ChildTaskList'

function App() {
  return (
    // <Router>
    // <div className="App">
    //   <Header />
      
    //   {/* <SignUp /> */}
    //   <Route exact path="/" component={ (props) =>
    //     <>
    //       <nav>
    //       <Link to="/ParentTaskList">Parent Tasks</Link>
    //       </nav>
    //       <nav>
    //       <Link to="/ChildTaskList">Child Tasks</Link>
    //       </nav> 
    //     </>
    //   }/>
      
    //   <SignIn />      
    //   <PrivateRoute exact path="/ParentTaskList" component={ParentTaskList} />
    // </div>
    // </Router>
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/parenttasklist">
            <ParentTaskList />
          </Route>

          <Route path="/childtasklist">
            <ChildTaskList />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}
export default App;
