import {Link, useHistory, useLocation} from "react-router-dom";
import { CheckToken } from "../token/CheckToken";

export default function PrivateRoute() {
  const location = useLocation();
  const navigate = useHistory();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Failed') return navigate.push("/login", location)

  return <Link to={"/"}/>
}
