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
  Col, UncontrolledTooltip
} from "reactstrap";
import {Link} from "react-router-dom";

const CreateAccount = () => {

  const duplicate = 'FAIL';

  const checkDuplicate = () => {
    switch (duplicate) {
      case 'FAIL':
        return "has-danger";
      case 'SUCCESS':
        return "has-success";
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
                  <small>Create Account</small>
                </div>
                <div className="btn-wrapper text-center">
                  <Form role="form">
                    <FormGroup className={`mb-3 ${checkDuplicate()}`}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-circle-08"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        {duplicate === 'FAIL' &&
                          <UncontrolledTooltip delay={0} placement="right" target="id">
                            중복된 아이디입니다
                          </UncontrolledTooltip>
                        }
                        <Input id="id" placeholder="Id" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Password" type="password" autoComplete="off" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Re-enter your Password" type="password" autoComplete="off" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-world"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" autoComplete="off" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" autoComplete="off" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-bell-55"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="PhoneNumber" type="text" autoComplete="off" />
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
                    <Link to={"/login"}>
                      <small>Login</small>
                    </Link>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button
                    color="primary"
                    type="button"
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
