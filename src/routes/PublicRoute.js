import {useHistory, useLocation} from 'react-router-dom';
import { CheckToken } from "../token/CheckToken";

export default function PublicRoute({ children }) {
  const location = useLocation();
  const navigate = useHistory();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Success') return navigate.push("/", location)

  return children
}