import Navbar from "../components/Navbars/TopNavbar";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Index from "../components/Index";
import Lectures from "../components/Lecture/Lectures";
import Lecture from "../components/Lecture/Lecture";
import Login from "../components/Login/Login";
import FindAccount from "../components/Login/FindAccount";
import CreateAccount from "../components/Login/CreateAccount";
import MyPage from "../components/My/MyPage";
import MyLecture from "../components/My/MyLecture";
import MainFooter from "../components/Footers/MainFooter";

const CustomRoute = () => {

  return <>
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
  </>;
}

export default CustomRoute;