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
import {Link} from "react-router-dom";
import Timer from "../utils/Timer";
import React, {useState} from "react";
import {certificationCheck, certificationSend, checkAccountDuplicate, registerUser} from "../../actions/UserActions";

const CreateAccount = () => {
  const [timer, setTimer] = useState(false);
  const timerStart = () => setTimer(true);

  const [duplicate, setDuplicate] = useState(false);
  const [certification, setCertification] = useState(false);

  const [account, setAccount] = useState("");
  const onAccountHandler = (e) => setAccount(e.currentTarget.value);
  const [password, setPassword] = useState("");
  const onPasswordHandler = (e) => setPassword(e.currentTarget.value);
  const [checkPassword, setCheckPassword] = useState("");
  const onCheckPasswordHandler = (e) => setCheckPassword(e.currentTarget.value);
  const [name, setName] = useState("");
  const onNameHandler = (e) => setName(e.currentTarget.value);
  const [email, setEmail] = useState("");
  const onEmailHandler = (e) => setEmail(e.currentTarget.value);
  const [checkEmail, setCheckEmail] = useState("");
  const onCheckEmailHandler = (e) => setCheckEmail(e.currentTarget.value);
  const [phoneNumber, setPhoneNumber] = useState("");
  const onPhoneNumberHandler = (e) => setPhoneNumber(e.currentTarget.value);

  const getData = () => {
    return {
      account: account,
      password: password,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      userType: "STUDENT",
    }
  }

  const duplicateCheck = () => {
    const fetchData = async () => checkAccountDuplicate({account: account});
    fetchData().then(response => {
      if (response.code === "00002") { setDuplicate(true) }
      else { setDuplicate(false) }
      alert(response.message);
    });
  }

  const sendMail = () => {
    const fetchData = async () => certificationSend({email: email});
    fetchData().then(response => alert(response.message));
  }

  const checkMail = () => {
    const fetchData = async () => certificationCheck({certificationNumber: checkEmail});
    fetchData().then(response => {
      if (response.code === "20202") { setCertification(true) }
      else { setCertification(false) }
      alert(response.message);
    })
  }

  const register = () => {
    if (!duplicate) return alert("아이디 중복을 체크해주세요.");
    if (!certification) return alert("이메일 인증을 진행해주세요.");
    if (!(password === checkPassword)) return alert("비밀번호와 확인 비밀번호가 일치하지 않습니다.");

    const fetchData = async () => registerUser(getData());
    fetchData().then(response => alert(response.message));
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
                  <small>Create Account</small>
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
                          id="id"
                          placeholder="Id"
                          type="text"
                          value={account}
                          onChange={onAccountHandler}
                        />
                        <Button color="default" className="ml-3 w-20" onClick={duplicateCheck}>중복 체크 하기</Button>
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
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Re-enter your Password"
                          type="password"
                          autoComplete="off"
                          value={checkPassword}
                          onChange={onCheckPasswordHandler}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-world"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Name"
                          type="text"
                          autoComplete="off"
                          value={name}
                          onChange={onNameHandler}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          autoComplete="off"
                          value={email}
                          onChange={onEmailHandler}
                        />
                        <Button color="default" className="ml-3 w-20" onClick={() => {
                          timerStart();
                          sendMail();
                        }}>인증 번호 받기</Button>
                      </InputGroup>
                    </FormGroup>
                    { timer &&
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-send"/>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="인증 번호를 입력해주세요."
                            type="text"
                            autoComplete="off"
                            value={checkEmail}
                            onChange={onCheckEmailHandler}
                          />
                          <Button color="default" className="ml-3 w-20" onClick={checkMail}>인증 번호 확인</Button>
                        </InputGroup>
                        <div className="d-flex justify-content-end">
                          <Timer mm={ 5 } ss={ 0 } />
                        </div>
                      </FormGroup>}
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-bell-55"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="PhoneNumber"
                          type="text"
                          autoComplete="off"
                          value={phoneNumber}
                          onChange={onPhoneNumberHandler}
                        />
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </div>
                <Row className="mt-3">
                  <Col xs="6">
                    {/*<Link to={"/find-account"}>*/}
                    {/*  <small>Forgot Account?</small>*/}
                    {/*</Link>*/}
                  </Col>
                  <Col className="text-right" xs="6">
                    <Link to={"/login"}>
                      <small>Login</small>
                    </Link>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button
                    color="primary"
                    type="button"
                    onClick={register}
                  >
                    Sign Up
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

export default CreateAccount;
