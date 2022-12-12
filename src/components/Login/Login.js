import {
  Button,
  Card,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {loginUser} from "../../actions/UserActions";
import {setRefreshToken} from "../../token/Cookies";
import {SET_TOKEN} from "../../token/Auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const onAccountHandler = (e) => setAccount(e.currentTarget.value);
  const onPasswordHandler = (e) => setPassword(e.currentTarget.value);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const body = { account: account,  password: password }

    const response = await loginUser(body);

    if (response.success === 'LOGIN') {
      setRefreshToken(response.data.token)
      dispatch(SET_TOKEN(response.data.token))

      return navigate.push("/")
    } else {
      alert(response.message)
    }
  }

  return <>
    <section className="section section-shaped">
      <div className="shape shape-style-1 shape-default"/>
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Sign in</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-circle-08"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Id"
                          type="text"
                          value={account}
                          onChange={onAccountHandler}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          autoComplete="off"
                          value={password}
                          onChange={onPasswordHandler}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </div>
                <Row className="mt-3">
                  <Col xs="6">
                    <Link to={"/find-account"}>
                      <small>Forgot Account?</small>
                    </Link>
                  </Col>
                  <Col className="text-right" xs="6">
                    <Link to={"/create-account"}>
                      <small>Create new account</small>
                    </Link>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button
                    color="primary"
                    type="button"
                    onClick={onSubmitHandler}
                  >
                    Sign in
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  </>;
}

export default Login;
