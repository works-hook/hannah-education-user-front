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
import {useState, useRef, useEffect} from "react";
import MyBackground from "../utils/MyBackground";
import {getUser, modifyUser, updatePassword} from "../../actions/UserActions";
import {uploadImage} from "../../actions/ImageActions";

const MyPage = () => {

  useEffect(() => {
    if (!account) {
      const fetchData = async () => getUser();
      fetchData().then(response => setData(response.data));
    }
  }, []);

  const [account, setAccount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const onNameHandler = (e) => setName(e.target.value);
  const [email, setEmail] = useState("");
  const onEmailHandler = (e) => setEmail(e.target.value);
  const [phoneNumber, setPhoneNumber] = useState("");
  const onPhoneNumberHandler = (e) => setPhoneNumber(e.target.value);
  const [brith, setBrith] = useState("");
  const onBrithHandler = (e) => setBrith(e.target.value);

  const [originPW, setOriginPW] = useState("");
  const onOriginPWHandler = (e) => setOriginPW(e.target.value);
  const [updatePW, setUpdatePW] = useState("");
  const onUpdatePWHandler = (e) => setUpdatePW(e.target.value);
  const [updatePWCheck, setUpdatePWCheck] = useState("");
  const onUpdatePWCheckHandler = (e) => setUpdatePWCheck(e.target.value);

  const inputRef = useRef(null);
  const clickProfileImg = () => inputRef.current.click();
  const changeProfileImg = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    const fetchData = async () => uploadImage("USER", formData);
    fetchData().then(response => {
      console.log(response)
      imageUpdate(response.data.data);
      setImageUrl(response.data.data);
    });
  }

  const setData = (data) => {
    setAccount(data.account);
    setImageUrl(data.imageUrl);
    setName(data.name);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setBrith(data.brith);
  }

  const getData = () => {
    return {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      brith: brith,
      imageUrl: imageUrl
    }
  }

  const getPWData = () => {
    return {
      originPassword: originPW,
      updatePassword: updatePW
    }
  }

  const save = () => modifyUser(getData()).then(response => alert(response.message));

  const onUpdatePassword = () => {
    if (updatePW === updatePWCheck) {
      const data = getPWData();
      const fetchData = async () => updatePassword(data);
      fetchData().then(response => alert(response.message));
    } else {
      alert("새 비밀번호와 새 비밀번호 확인이 다릅니다.");
    }
  }

  const imageUpdate = (imageUrl) => {
    const data = getData();
    data.imageUrl = imageUrl;
    modifyUser(data).then(response => alert(response.message));
  }

  return <>
    <MyBackground />
    <section className="lecture-section">
      <Container>
        <Card className="card-profile shadow mt--300">
          <div className="px-4">
            <Row className="justify-content-center">
                <img
                  className="profile-img"
                  alt={imageUrl}
                  src={imageUrl}
                />
            </Row>
            <Row className="justify-content-center">
              <div>
                <h3 className="text-default">{name}</h3>
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
                      <Input readonly id="id" placeholder="Id" type="text" value={account}/>
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
                      <Input
                        placeholder="현재 비밀번호"
                        type="password"
                        value={originPW}
                        onChange={onOriginPWHandler}
                        autoComplete="off"
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
                        placeholder="새 비밀번호"
                        type="password"
                        value={updatePW}
                        onChange={onUpdatePWHandler}
                        autoComplete="off"
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
                        placeholder="새 비밀번호 확인"
                        type="password"
                        value={updatePWCheck}
                        onChange={onUpdatePWCheckHandler}
                        autoComplete="off"
                      />
                    </InputGroup>
                  </FormGroup>
                  <Row className="justify-content-center mb-3">
                    <Button color="default" size="xl" onClick={onUpdatePassword}>비밀번호 변경</Button>
                  </Row>
                  <FormGroup>
                    <span>Name</span>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-world"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Name" type="text" autoComplete="off" value={name} onChange={onNameHandler}/>
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
                      <Input placeholder="Email" type="email" autoComplete="off" value={email} onChange={onEmailHandler}/>
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
                      <Input placeholder="PhoneNumber" type="text" autoComplete="off" value={phoneNumber} onChange={onPhoneNumberHandler}/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <span>Brith</span>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-diamond"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Brith" type="date" value={brith} autoComplete="off" onChange={onBrithHandler}/>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row className="justify-content-center mb-3">
              <Button color="default" size="xl" onClick={save}>저장</Button>
            </Row>
          </div>
        </Card>
      </Container>
    </section>
  </>;
}

export default MyPage;
