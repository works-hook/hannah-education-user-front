import {Row, Col, Container} from "reactstrap";
import "../../../assets/css/custom.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSubjects} from "../../../actions/MainActions";

const subjectData = [
  {
    id: 1,
    title: "Java",
    src: require("assets/img/theme/java.png")
  },
  {
    id: 2,
    title: "React",
    src: require("assets/img/theme/react.png")
  },
  {
    id: 3,
    title: "Python",
    src: require("assets/img/theme/python.jpg")
  },
  {
    id: 4,
    title: "Docker",
    src: require("assets/img/theme/docker.png")
  },
  {
    id: 5,
    title: "JavaScript",
    src: require("assets/img/theme/javascript.png")
  },
  {
    id: 6,
    title: "Kotlin",
    src: require("assets/img/theme/kotlin.png")
  },
  {
    id: 7,
    title: "Vue",
    src: require("assets/img/theme/vue.png")
  },
];

const Subject = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (subjects.length < 1) getSubjects().then(response => setSubjects(response.data));
  }, []);

  return (
    <>
      <Container className="py-md">
        <Row className="justify-content-between minus-mt-25">
          {subjects.map((data) => (
            <Link to={{
                pathname: `lectures`,
                state: { searchTag: data.name }
              }}
            >
              <Col className="text-center" key={data.id}>
                <small className="d-block font-weight-bold mb-4 text-default">
                  {data.name}
                </small>
                <img
                  alt={data.name}
                  className="img-fluid rounded-circle shadow subject-image"
                  src={data.imageUrl}
                />
              </Col>
            </Link>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Subject;
