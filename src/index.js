import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "./components/Index.js";
import Lectures from "./components/Lecture/Lectures.js";
import Lecture from "./components/Lecture/Lecture";
import Login from "components/Login/Login.js";
import Navbar from "./components/Navbars/TopNavbar";
import MainFooter from "./components/Footers/MainFooter";
import FindAccount from "./components/Login/FindAccount";
import CreateAccount from "./components/Login/CreateAccount";
import MyPage from "./components/My/MyPage";
import MyLecture from "./components/My/MyLecture";

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
        path="/login"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/find-account"
        exact
        render={(props) => <FindAccount {...props} />}
      />
      <Route
        path="/create-account"
        exact
        render={(props) => <CreateAccount {...props} />}
      />
      <Route
        path="/my-page"
        exact
        render={(props) => <MyPage {...props} />}
      />
      <Route
        path="/my-lecture"
        exact
        render={(props) => <MyLecture {...props} />}
      />
      <Redirect to="/"/>
    </Switch>
    <MainFooter/>
  </Router>
);
