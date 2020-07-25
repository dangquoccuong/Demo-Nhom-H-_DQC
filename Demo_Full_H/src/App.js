import React, { Component } from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Page_Home from "./components/Page_Home";
import Page_ToDoList from "./components/Page_ToDoList";
import Page_Calculator from "./components/Page_Calculator";
import NavBT4 from "./components/Nav/NavBT4";

// npm install react-router-dom --save
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBT4 />
        <Switch>
          <Route path="/" exact component={Page_Home} />
          <Route path="/todolist" component={Page_ToDoList} />
          <Route path="/calculator" component={Page_Calculator} />
        </Switch>
      </Router>
    );
  }
}

export default App;
