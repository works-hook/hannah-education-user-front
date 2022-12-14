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
  ListGroupItem, Alert,
} from "reactstrap";
import {useEffect, useState} from "react";
import MyLectureTable from "./MyLectureTable";
import MyBackground from "../utils/MyBackground";
import NoticeModal from "./NoticeModal";
import LectureModal from "./LectureModal";
import LikeLectureTable from "./LikeLectureTable";
import LectureChart from "./LectureChart";
import {getTakingLecture} from "../../actions/ClassActions";

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

  const [lectureTitle, setLectureTitle] = useState("");
  const onLectureTitle = (data) => setLectureTitle(data);

  const [toggleState, setToggleState] = useState(false);
  const toggleModal = () => setToggleState(!toggleState);

  const [lectureToggle, setLectureToggle] = useState(false);
  const lectureModal = () => setLectureToggle(!lectureToggle);

  const [takingLecture, setTakingLecture] = useState([]);

  useEffect(() => {
    if (takingLecture.length < 1) {
      const fetchData = async () => getTakingLecture();
      fetchData().then(response => setTakingLecture(response.data));
    }
  }, []);

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
                    <i className="ni ni-chart-bar-32 mr-2"/>
                    내 학습 통계
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    {takingLecture.length < 1 ?
                      <Alert color="secondary" className="custom-alert">수강 중인 강의가 없습니다!</Alert>
                      : <ListGroup>
                        {takingLecture.map((data) => {
                          return <ListGroupItem key={data.lectureId}>
                            <MyLectureTable
                              key={data.lectureId}
                              data={data}
                              toggleModal={toggleModal}
                              lectureModal={lectureModal}
                              onLectureId={onLectureId}
                              onNoticeId={onNoticeId}
                              onLectureTitle={onLectureTitle}
                            />
                          </ListGroupItem>
                        })}
                      </ListGroup>
                    }
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <LikeLectureTable />
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <LectureChart />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {toggleState &&
        <NoticeModal
          toggleModal={toggleModal}
          toggleState={toggleState}
          noticeId={noticeId}
        />
      }
      {lectureToggle &&
        <LectureModal
          lectureModal={lectureModal}
          lectureToggle={lectureToggle}
          lectureId={lectureId}
          lectureTitle={lectureTitle}
        />
      }
    </section>
  </>;
}

export default MyLecture;
