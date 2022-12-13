import {Row, Col, Container} from "reactstrap";
import "../../../assets/css/custom.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getRandomSubjects} from "../../../actions/MainActions";

const Subject = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (subjects.length < 1) getRandomSubjects().then(response => setSubjects(response.data));
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
