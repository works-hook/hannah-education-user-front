import {Row, Col, Container} from "reactstrap";
import "../../../assets/css/custom.css";
import {Link} from "react-router-dom";

const subjectData = [
  {
    id: 1,
    title: "Java",
    src: require("assets/img/theme/다운로드.png")
  },
  {
    id: 2,
    title: "React",
    src: require("assets/img/theme/download1.png")
  },
  {
    id: 3,
    title: "Python",
    src: require("assets/img/theme/다운로드.jpg")
  },
  {
    id: 4,
    title: "Docker",
    src: require("assets/img/theme/다운로드 (1).png")
  },
  {
    id: 5,
    title: "JavaScript",
    src: require("assets/img/theme/images.png")
  },
  {
    id: 6,
    title: "Kotlin",
    src: require("assets/img/theme/Kotlin_Icon.svg.png")
  },
  {
    id: 7,
    title: "Vue",
    src: require("assets/img/theme/download.png")
  },
];

const Subject = () => {
  return (
    <>
      <Container className="py-md">
        <Row className="justify-content-between minus-mt-25">
          {subjectData.map((data) => (
            <Link to={{
                pathname: `lectures`,
                state: { searchTag: data.title }
              }}
            >
              <Col className="text-center" key={data.id}>
                <small className="d-block font-weight-bold mb-4 text-default">
                  {data.title}
                </small>
                <img
                  alt={data.title}
                  className="img-fluid rounded-circle shadow subject-image"
                  src={data.src}
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
