import {Link, useHistory, useLocation} from "react-router-dom";
import { CheckToken } from "../token/CheckToken";

export default function PrivateRoute() {
  const location = useLocation();
  const navigate = useHistory();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Failed') return navigate.push("/login", location)
  /*<Navigate to="/login" state={{from: location}}/>*/

  return <Link to={"/"}/>
}
