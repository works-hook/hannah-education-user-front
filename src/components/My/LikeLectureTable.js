import LectureCard from "../Lecture/LectureCard";
import {Alert, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {likedLecture} from "../../actions/LecturesActions";

const LikeLectureTable = () => {
  const [likeLectures, setLikeLectures] = useState([]);

  useEffect(() => {
    if (likeLectures.length < 1) {
      const fetchData = async () => likedLecture();
      fetchData().then(response => setLikeLectures(response.data));
    }
  }, []);

  return <>
    <Row className="justify-content-center">
      {likeLectures.map((data) => {
        return <Link key={data.lectureId} to={`/lectures/${data.lectureId}`} className="lectures-link">
          <LectureCard title={data.title} img={data.thumbnailImgUrl} tags={data.tags} className={"mx-2 card-width"}/>
        </Link>
      })}
      {likeLectures.length < 1 &&
          <Alert color="secondary" className="custom-alert w-90">강의를 둘러보고 좋아요를 클릭해보세요!</Alert>}
    </Row>
  </>;
}

export default LikeLectureTable;