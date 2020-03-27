import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignedInLinks from "./components/layout/SignedInLinks";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import TutorSearch from "./components/form/TutorSearch";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/layout/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={TutorSearch} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user/:id" component={Profile} />
          <Route path="/dash/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
      // <div className="App">
      //   <h1>Hello</h1>
      // </div>
    );
  }
}

export default App;
