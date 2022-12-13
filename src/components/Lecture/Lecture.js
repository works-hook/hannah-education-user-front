import {
  Badge, Button,
  Card,
  Col,
  Container, Modal,
  Row, UncontrolledTooltip
} from "reactstrap";
import "../../assets/css/custom.css";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import {Viewer} from '@toast-ui/react-editor';
import {useEffect, useState} from "react";
import {cancelLikeLecture, checkLikedLecture, getLecture, getTeacher, likeLecture} from "../../actions/LecturesActions";
import {getCookieToken} from "../../token/Cookies";
import {CheckToken} from "../../token/CheckToken";
import {useHistory} from "react-router-dom";

const Lecture = (props) => {
  const lectureId = props.match.params.lectureId;

  const navigate = useHistory();

  const auth = getCookieToken();
  const checkToken = CheckToken(auth);

  const [lecture, setLecture] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [tags, setTags] = useState(null);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (!lecture) {
      const fetchLectureData = async () => getLecture(lectureId);
      fetchLectureData().then(response => setData(response.data));

      const fetchTeacherData = async () => getTeacher(lectureId);
      fetchTeacherData().then(response => setTeacher(response.data));
    }
  }, []);

  useEffect(() => {
    if (checkToken) {
      const fetchData = async () => checkLikedLecture(lectureId);
      fetchData().then(response => setLike(response.data));
    }
  }, []);

  const [subscribe, setSubscribe] = useState(false);
  const onSubscribe = () => setSubscribe(!subscribe);

  const [like, setLike] = useState(null);
  const onLike = (cancel) => {
    if (checkToken.isAuth === 'Failed') {
      alert("로그인 후 이용가능합니다.");
      return navigate.push('/login');
    }
    setLike(!like);
    if (cancel) {
      setLikeCount(likeCount - 1);
      const fetchData = async () => cancelLikeLecture(lectureId);
      fetchData().then(response => alert(response.message));
    } else {
      setLikeCount(likeCount + 1);
      const fetchData = async () => likeLecture(lectureId);
      fetchData().then(response => alert(response.message));
    }
  }

  const setData = (data) => {
    setLecture(data);
    setTags(data.tags);
    setLikeCount(data.likeCount);
  }

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
              {lecture &&
                <img
                  className="lecture-img"
                  alt={lecture.thumbnailImgUrl}
                  src={lecture.thumbnailImgUrl}
                />
              }
            </Row>
            <Row className="justify-content-center">
              <Col className="my-3" xl={8}>
                <div className="text-center">
                  {lecture && <h3 className="text-default">{lecture.title}</h3>}
                  <span className="alert-inner--icon d-flex justify-content-center mb-2">
                    <div className="mr-1 pointer">
                      { like
                        ? <i className="fa fa-heart" onClick={() => { onLike(true) }}/>
                        : <>
                          <UncontrolledTooltip
                            delay={0}
                            placement="top"
                            target="like"
                          > Like! </UncontrolledTooltip>
                          <i className="fa fa-heart-o" data-placement="top" id="like"
                             onClick={() => { onLike(false) }}
                          />
                        </>
                      }
                    </div>
                    <div>
                      {likeCount}
                    </div>
                  </span>
                  <div className="mb-3">
                    {tags && tags.map((tag) => {
                      return (
                        <Badge key={tag.tagId} color={tag.color} pill className="mr-1">
                          {tag.name}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                {lecture && <Viewer initialValue={lecture.content}/>}
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button color="neutral" size="lg" onClick={onSubscribe}>수강 신청 하기</Button>
              <Modal
                className="modal-dialog-centered"
                isOpen={subscribe}
                toggle={onSubscribe}
              >
                <div className="modal-body">
                  <p className="text-default">
                    <br />
                    수강 신청을 하시겠습니까?
                  </p>
                </div>
                <div className="modal-footer">
                  <Button color="primary" type="button">
                    신청하기
                  </Button>
                  <Button
                    className="ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={onSubscribe}
                  >
                    닫기
                  </Button>
                </div>
              </Modal>
            </Row>
            <div className="mt-5 py-5 border-top">
              <Row className="justify-content-center mb-3">
                <h2 className="text-default">강사 소개</h2>
              </Row>
              {teacher && <>
                <Row className="justify-content-center">
                  <Col xs={2}>
                    <img src={teacher.imageUrl} alt={teacher.imageUrl} className="img-fluid rounded-circle shadow"/>
                  </Col>
                  <Col xs={2} className="teacher-badge">
                    <div className="introduce-count">
                      <h3 className="text-default m-2">{teacher.name}</h3>
                      <span className="text-default m-2">{teacher.oneLineIntroduction}</span>
                      <Button color="default" size="sm" outline disabled className="m-2 mt-3">총 강의
                        수&nbsp;&nbsp;&nbsp;{teacher.lectureCount}개</Button>
                      <Button color="default" size="sm" outline disabled className="m-2">총 수강생
                        수&nbsp;&nbsp;&nbsp;{teacher.studentCount}명</Button>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={8}>
                    <Viewer initialValue={teacher.introduction}/>
                  </Col>
                </Row>
              </>}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  </>
}

export default Lecture;
