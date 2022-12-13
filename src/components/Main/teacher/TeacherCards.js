import {
  Card, CardImg,
  Col, Container,
  Row
} from "reactstrap";
import "swiper/css";
import "swiper/css/pagination";
import "../../../assets/css/custom.css";
import {useEffect, useState} from "react";
import {getTeachers} from "../../../actions/MainActions";

const TeacherCards = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    if (teachers.length < 1) {
      const fetchData = async () => getTeachers();
      fetchData().then(response => setTeachers(response.data));
    }
  })

  return <>
    <Container className="pt-3">
      <h3 className="cards-header">오늘의 강사님🎖</h3>
      <Row className="mt-4">
        {teachers.map((data) => {
          return <>
            <Col className="p-1 mx-3" key={data}>
              <Card className="bg-default shadow border-0 h-100">
                <CardImg
                  className="h-60"
                  alt={data.imageUrl}
                  src={data.imageUrl}
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
