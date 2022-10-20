import React, {useState} from "react";
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
  Col, Alert, UncontrolledAlert
} from "reactstrap";
import {Link} from "react-router-dom";
import Timer from "../utils/Timer";

const FindAccount = () => {
  const [timer, setTimer] = useState(false);
  const timerStart = () => setTimer(true);

  const [foundIdAlert, setFoundIdAlert] = useState(false);
  const foundId = () => setFoundIdAlert(!foundIdAlert);

  return <>
    <section className="section section-shaped">
      <div className="shape shape-style-1 shape-default"/>
      <Container className="pt-lg-7">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Found Id</small>
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
                        <Input placeholder="Name" type="text"/>
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
                        />
                      </InputGroup>
                    </FormGroup>
                  </Form>
                </div>
                {foundIdAlert &&
                  <UncontrolledAlert className="alert-default">
                    회원님의 아이디는 <strong>cl******29</strong>입니다
                  </UncontrolledAlert>
                }
                <div className="text-center">
                  <Button block color="primary" type="button" onClick={foundId}>
                    아이디 찾기
                  </Button>
                </div>
                <div className="text-muted text-center mt-5 mb-3">
                  <small>Found Password</small>
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
                        <Input placeholder="Id" type="text"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-between">
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
                        />
                      </InputGroup>
                      <Button color={"default"} className="ml-3 w-40" onClick={timerStart}>인증 번호 받기</Button>
                    </FormGroup>
                    { timer &&
                      <FormGroup>
                        <div className="d-flex justify-content-end">
                          <Timer mm={ 5 } ss={ 0 } />
                        </div>
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
                          />
                        </InputGroup>
                      </FormGroup>}
                  </Form>
                </div>
                <div className="text-center">
                  <Button block color="primary" type="button">
                    비밀번호 초기화
                  </Button>
                </div>
                <Row className="mt-3">
                  <Col xs="6">
                    <Link to={"/login"}>
                      <small>Login</small>
                    </Link>
                  </Col>
                  <Col className="text-right" xs="6">
                    <Link to={"/create-user"}>
                      <small>Create new account</small>
                    </Link>
                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  </>;
}

export default FindAccount;
