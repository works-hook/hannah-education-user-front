import {
  Card,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import {useState} from "react";
import MyLectureTable from "./MyLectureTable";
import MyBackground from "../utils/MyBackground";
import NoticeModal from "./NoticeModal";
import LectureModal from "./LectureModal";
import LikeLectureTable from "./LikeLectureTable";

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

  const [lectureId, setLectureId] = useState(0);
  const onLectureId = (id) => setLectureId(id);

  const [noticeId, setNoticeId]= useState(0);
  const onNoticeId = (id) => setNoticeId(id);

  const [toggleState, setToggleState] = useState(false);
  const toggleModal = () => setToggleState(!toggleState);

  const [lectureToggle, setLectureToggle] = useState(false);
  const lectureModal = () => setLectureToggle(!lectureToggle);

  return <>
    <MyBackground />
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
                          <MyLectureTable
                            key={data.lectureId}
                            data={data}
                            toggleModal={toggleModal}
                            lectureModal={lectureModal}
                            onLectureId={onLectureId}
                            onNoticeId={onNoticeId}
                          />
                        </ListGroupItem>
                      })}
                    </ListGroup>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <LikeLectureTable userId={2} />
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
      <NoticeModal
        toggleModal={toggleModal}
        toggleState={toggleState}
        noticeId={noticeId}
      />
      <LectureModal
        lectureModal={lectureModal}
        lectureToggle={lectureToggle}
        lectureId={lectureId}
      />
    </section>
  </>;
}

export default MyLecture;
