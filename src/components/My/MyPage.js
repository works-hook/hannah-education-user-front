import {
  Button,
  Card,
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
import teacherImg from "../../assets/img/theme/KakaoTalk_20221006_135710459.jpg";
import {useState, useRef} from "react";

const myData = {
  name: "Hannah",
  img: teacherImg,
  id: "coals0329",
  email: "ghdcoalss33@gmail.com",
  phoneNumber: "01066674359",
};

const MyPage = () => {
  const [name, setName] = useState(myData.name);
  const onSetName = (e) => setName(e.target.value);

  const [email, setEmail] = useState(myData.email);
  const onSetEmail = (e) => setEmail(e.target.value);

  const [phoneNumber, setPhoneNumber] = useState(myData.phoneNumber);
  const onSetPhoneNumber = (e) => setPhoneNumber(e.target.value);

  const inputRef = useRef(null);
  const clickProfileImg = () => inputRef.current.click();
  const changeProfileImg = (e) => console.log(e.target.files[0]);
  // https://www.inflearn.com/questions/35939

  return <>
    <section className="section-profile-cover section-shaped my-0 minus-mt-25">
      <div className="shape shape-style-1 shape-default alpha-4"/>
      <div className="separator separator-bottom separator-skew">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-white"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </section>
    <section className="lecture-section">
      <Container>
        <Card className="card-profile shadow mt--300">
          <div className="px-4">
            <Row className="justify-content-center">
              <img
                className="profile-img"
                alt={myData.img}
                src={myData.img}
              />
            </Row>
            <Row className="justify-content-center">
              <div>
                <h3 className="text-default">{myData.name}</h3>
              </div>
              <div>
                <Button className="mt-2 ml-3" size="sm" onClick={clickProfileImg}>프로필 사진 업로드</Button>
                <Input innerRef={inputRef} type="file" onChange={changeProfileImg} style={{display: "none"}} />
              </div>
            </Row>
            <Row className="justify-content-center">
              <Col md={6}>
                <Form role="form">
                  <FormGroup className={`mb-3`}>
                    <span>Id</span>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input id="id" placeholder="Id" type="text" value={myData.id}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <span>Password</span>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="현재 비밀번호" type="password" autoComplete="off" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="새 비밀번호" type="password" autoComplete="off" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="새 비밀번호 확인" type="password" autoComplete="off" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <span>Name</span>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-world"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text" autoComplete="off" value={name} onChange={onSetName}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <span>Email</span>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" autoComplete="off" value={email} onChange={onSetEmail}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <span>Phone Number</span>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-bell-55"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="PhoneNumber" type="text" autoComplete="off" value={phoneNumber} onChange={onSetPhoneNumber}/>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Button color="default" size="xl" onClick={false}>저장</Button>
            </Row>
          </div>
        </Card>
      </Container>
    </section>
  </>;
}

export default MyPage;
