import {
  Card, CardImg,
  Col, Container,
  Row
} from "reactstrap";
import "swiper/css";
import "swiper/css/pagination";
import "../../../assets/css/custom.css";
import teacher1 from "../../../assets/img/theme/team-1-800x800.jpg";
import teacher3 from "../../../assets/img/theme/team-3-800x800.jpg";
import teacher4 from "../../../assets/img/theme/team-4-800x800.jpg";
import teacher5 from "../../../assets/img/theme/KakaoTalk_20221006_135710459.jpg";

const teacherData = [
  {
    name: "Tompson",
    oneLineIntroduction: "Web Developer",
    img: teacher1,
  },
  {
    name: "YeongHan",
    oneLineIntroduction: "우아한형제들 기술이사 (전: 카카오, SK플래닛)",
    img: "https://cdn.inflearn.com/public/users/thumbnails/74366/4c5096a5-6579-4034-b780-b8d1a958055f",
  },
  {
    name: "Alexander",
    oneLineIntroduction: "UI/UX Designer",
    img: teacher3,
  },
  {
    name: "John Doe",
    oneLineIntroduction: "Founder and CEO",
    img: teacher4,
  },
  {
    name: "Hannah",
    oneLineIntroduction: "Backend Developer",
    img: teacher5,
  },
];

const TeacherCards = () => {
  return <>
    <Container className="pt-3">
      <h3 className="cards-header">오늘의 강사님🎖</h3>
      <Row className="mt-4">
        {teacherData.map((data) => {
          return <>
            <Col className="p-1 mx-3" key={data}>
              <Card className="bg-default shadow border-0 h-100">
                <CardImg
                  alt={data.img}
                  src={data.img}
                  top
                />
                <blockquote className="card-blockquote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-bg"
                    preserveAspectRatio="none"
                    viewBox="0 0 583 95"
                  >
                    <polygon
                      className="fill-default"
                      points="0,52 583,95 0,95"
                    />
                    <polygon
                      className="fill-default"
                      opacity=".2"
                      points="0,42 583,95 683,0 0,95"
                    />
                  </svg>
                  <h5 className="font-weight-bold text-white">
                    {data.name}
                  </h5>
                  <p className="text-italic text-white">
                    {data.oneLineIntroduction}
                  </p>
                </blockquote>
              </Card>
            </Col>
          </>;
        })}
      </Row>
    </Container>
  </>;
}

export default TeacherCards;
