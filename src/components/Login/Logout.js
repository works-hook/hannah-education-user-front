import {useDispatch} from "react-redux";
import {DELETE_TOKEN} from "../../token/Auth";
import {removeCookieToken} from "../../token/Cookies";
import {useHistory} from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();

  dispatch(DELETE_TOKEN());
  removeCookieToken();
  return navigate.push('/login');
}

export default Logout;
