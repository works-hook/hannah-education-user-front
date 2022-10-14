import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Lectures from "./components/Lecture/Lectures.js";
import Lecture from "./components/Lecture/Lecture";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Navbar from "./components/Navbars/TopNavbar";
import MainFooter from "./components/Footers/MainFooter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navbar />
    <Switch>
      <Route
        path="/"
        exact
        component={(props) => <Index {...props} />}
      />
      <Route
        path="/lectures"
        exact
        component={(props) => <Lectures {...props} />}
      />
      <Route
        path="/lectures/:lectureId"
        exact
        render={(props) => <Lecture {...props} />}
      />
      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      <Route
        path="/login-page"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      />
      <Redirect to="/"/>
    </Switch>
    <MainFooter/>
  </Router>
);
