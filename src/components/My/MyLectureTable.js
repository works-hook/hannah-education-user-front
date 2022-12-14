import {
  Badge, Row, Col, Progress, ListGroup, ListGroupItem, Button, Alert
} from "reactstrap";

const MyLectureTable = ({data, className, toggleModal, lectureModal, onLectureId, onNoticeId, onLectureTitle}) => {
  onLectureTitle(data.title);
  return (<>
    <Row className={`justify-content-between ${className}`}>
      <Col className="mw-25">
        <img
          alt={data.thumbnailImgUrl}
          className="img-fluid rounded lecture-card-img"
          src={data.thumbnailImgUrl}
        />
        <h6 className="text-default mt-2">
          {data.title}
        </h6>
        <div className="card-badge">
          {data.tags.map((tag) => {
            return (<Badge key={tag.tagId} color={tag.color} pill className="mr-1">
                {tag.name}
              </Badge>);
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
        <h6 className="text-default mt-3">강의 시작일</h6><span>{data.startDate}</span><br/>
        <Button color="primary" outline size="sm" className="mt-2"
          onClick={() => {
            onLectureId(data.lectureId);
            lectureModal();
          }}
        >
          강의 보기
        </Button>
      </Col>
      <Col className="mw-40">
        <h6 className="text-default">최근 강의 공지</h6>
        {data.notices.length < 1 ?
          <Alert color="secondary text-default">공지가 존재하지 않습니다.</Alert>
          : <ListGroup>
            {data.notices.map((notice) => {
              return <ListGroupItem key={notice.noticeId} className="all-center">
                <h6
                  onClick={() => {
                    onNoticeId(notice.noticeId);
                    toggleModal();
                  }}
                  className="text-default pointer"
                >
                  {notice.title}
                </h6>
                <div>{notice.createdDate}</div>
              </ListGroupItem>
            })}
          </ListGroup>
        }
      </Col>
    </Row>
  </>);
}

export default MyLectureTable;
