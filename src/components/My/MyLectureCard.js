import {
  Badge, Row, Col, Progress, ListGroup, ListGroupItem, Button
} from "reactstrap";

const MyLectureCard = ({data, className, toggleModal, lectureModal}) => {
  const notices = data.notices;

  return (<>
    <Row className={`justify-content-between ${className}`}>
      <Col className="mw-25">
        <img
          alt={data.img}
          className="img-fluid rounded lecture-card-img"
          src={data.img}
        />
        <h6 className="text-default mt-2">
          {data.title}
        </h6>
        <div className="card-badge">
          {data.tags.map((tag, index) => {
            return (
              <Badge key={index} color={tag.color} pill className="mr-1">
                {tag.name}
              </Badge>
            );
          })}
        </div>
      </Col>
      <Col className="mw-30">
        <div className="d-flex justify-content-between">
          <h6 className="text-default">내 학습 현황</h6>
          <div className="progress-percentage">
            <span>{data.doneClassCount} of {data.classCount}</span>
          </div>
        </div>
        <div className="progress-wrapper">
          <Progress max={data.classCount} value={data.doneClassCount} color="default"/>
        </div>
        <h6 className="text-default mt-3">강의 시작일</h6><span>{data.startDate}</span>
        <h6 className="text-default mt-3">강의 종료일</h6><span>{data.endDate}</span><br/>
        <Button color="primary" outline size="sm" className="mt-2" onClick={lectureModal}>강의 보기</Button>
      </Col>
      <Col className="mw-40">
        <h6 className="text-default">최근 강의 공지</h6>
        <ListGroup>
          {notices.map((notice) => {
            return <ListGroupItem key={notice.noticeId} className="all-center">
              <h6 className="text-default pointer" onClick={toggleModal}>{notice.title}</h6>
              <div>{notice.regDate}</div>
            </ListGroupItem>
          })}
        </ListGroup>
      </Col>
    </Row>
  </>);
}

export default MyLectureCard;
