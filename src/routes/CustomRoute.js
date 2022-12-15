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
import Logout from "../components/Login/Logout";
import {getCookieToken} from "../token/Cookies";
import {useState} from "react";
import {CheckToken} from "../token/CheckToken";

const CustomRoute = () => {
  const auth = getCookieToken();
  const [checkToken, setCheckToken] = useState(CheckToken(auth));
  console.log(checkToken)

  return <>
    <Router>
      <Navbar checkToken={checkToken} />
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
          render={(props) => <Login {...props} setCheckToken={setCheckToken} />}
        />
        <Route
          path="/logout"
          exact
          render={(props) => <Logout {...props} setCheckToken={setCheckToken} />}
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