import {
  Card,
  Container,
  Row,
  Col, Nav, NavItem, NavLink, TabContent, TabPane, CardBody, ListGroup, ListGroupItem, Button, Modal
} from "reactstrap";
import {useState} from "react";
import MyLectureCard from "./MyLectureCard";

const lectureData = [
  {
    lectureId: 17,
    title: "따라하며 배우는 리액트 A-Z",
    img: "https://cdn.inflearn.com/public/courses/329170/cover/223c54c0-9220-4937-836d-70a36be3eb1c/329170-eng.png",
    classCount: 10,
    doneClassCount: 2,
    startDate: "2022-10-15",
    endDate: "2022-12-31",
    notices: [
      {
        noticeId: 13,
        title: "2022/12/25 보강 공지",
        regDate: "2022-11-02"
      },
      {
        noticeId: 123,
        title: "2022/10/30 휴강 공지",
        regDate: "2022-10-27"
      },
      {
        noticeId: 33,
        title: "안녕하세요 강사 Hannah 입니다",
        regDate: "2022-10-25"
      },
    ],
    tags: [
      {
        name: "React",
        color: "info",
      },
      {
        name: "Next.js",
        color: "info",
      },
      {
        name: "TypeScript",
        color: "primary",
      },
      {
        name: "TDD",
        color: "success",
      },
    ]
  },
  {
    lectureId: 1,
    title: "Django 프레임워크 제대로 배우기",
    img: "https://cdn.inflearn.com/public/courses/328671/cover/5ac45f32-1f51-4cdd-9f4a-5f7827ed0a15/328671-eng.png",
    classCount: 20,
    doneClassCount: 7,
    startDate: "2022-09-03",
    endDate: "2022-12-31",
    notices: [
      {
        noticeId: 13,
        title: "2022/12/25 보강 공지",
        regDate: "2022-11-02"
      },
      {
        noticeId: 123,
        title: "2022/10/30 휴강 공지",
        regDate: "2022-10-27"
      },
      {
        noticeId: 33,
        title: "안녕하세요 강사 Hannah 입니다",
        regDate: "2022-10-25"
      },
    ],
    tags: [
      {
        name: "Django",
        color: "success",
      },
      {
        name: "Python",
        color: "info",
      },
    ]
  },
];

const MyLecture = () => {
  const [state = {
    iconTabs: 1,
    plainTabs: 1
  }, setState] = useState();

  const toggleNavs = (e, state, index) => {
    setState({
      [state]: index
    });
  };

  // api 통신 후 데이터 받아서 내용 뿌려주기
  const [noticeId, setNoticeId] = useState(0);
  const noticeData = {
    title: "2022/10/30 휴강 공지",
    content: "강사님의 개인적인 사정으로 2022년 10월 30일 강의는 휴강 하겠습니다. 학생들의 많은 양해 부탁드립니다. 감사합니다.",
    regDate: "2022-10-27"
  }

  const [toggleState, setToggleState] = useState(false);
  const toggleModal = () => {
    setToggleState(!toggleState)
  };

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
    <section className="my-lecture-section">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={state.iconTabs === 1}
                    className={`mb-sm-3 mb-md-0 ${state.iconTabs === 1 ? 'active' : ''}`}
                    onClick={(e) => toggleNavs(e, "iconTabs", 1)}
                    href="#"
                    role="tab"
                  >
                    <i className="ni ni-align-left-2 mr-2"/>
                    수강 중인 강의
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={state.iconTabs === 2}
                    className={`mb-sm-3 mb-md-0 ${state.iconTabs === 2 ? 'active' : ''}`}
                    onClick={(e) => toggleNavs(e, "iconTabs", 2)}
                    href="#"
                    role="tab"
                  >
                    <i className="ni ni-basket mr-2"/>
                    내가 찜한 강의
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={state.iconTabs === 3}
                    className={`mb-sm-3 mb-md-0 ${state.iconTabs === 3 ? 'active' : ''}`}
                    onClick={(e) => toggleNavs(e, "iconTabs", 3)}
                    href="#"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2"/>
                    내 질문
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <ListGroup>
                      {lectureData.map((data) => {
                        return <ListGroupItem key={data.lectureId}>
                          <MyLectureCard
                            key={data.lectureId}
                            data={data}
                            toggleModal={toggleModal}
                          />
                        </ListGroupItem>
                      })}
                    </ListGroup>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <p className="description">
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone. Seitan
                      aliquip quis cardigan american apparel, butcher voluptate
                      nisi qui.
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <Modal
      className="modal-dialog-centered"
      isOpen={toggleState}
      toggle={toggleModal}
    >
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {noticeData.title}
        </h5>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={toggleModal}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body custom-font">
        {noticeData.content}<br/>
        <small>{noticeData.regDate}</small>
      </div>
      <div className="modal-footer">
        <Button
          color="primary"
          data-dismiss="modal"
          type="button"
          onClick={toggleModal}
        >
          Close
        </Button>
      </div>
    </Modal>
  </>;
}

export default MyLecture;
