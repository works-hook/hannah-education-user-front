import {Badge, Card, CardBody, Col, Row} from "reactstrap";

const LectureChart = ({userId}) => {

  // api 통신 후 데이터 사용
  const myChartData = {
    doneLecture: 8,
    doneClass: 547,
    doneAssignment: 132,
    tags: [
      {
        name: "Java",
        color: "primary",
        count: 2
      },
      {
        name: "Kotlin",
        color: "warning",
        count: 1,
      },
      {
        name: "Spring",
        color: "success",
        count: 5,
      },
      {
        name: "Spring boot",
        color: "success",
        count: 1
      },
      {
        name: "JPA",
        color: "warning",
        count: 2
      },
      {
        name: "MVC",
        color: "info",
        count: 1
      },
    ]
  }

  return <>
    <Row className="justify-content-between">
      <Col md={6}>
        <Card>
          <CardBody className="chart-card">
            <h5>🏃 학습 통계</h5>
            <Row className="text-center my-4">
              <Col>
                <h2 className="text-default">{myChartData.doneLecture}</h2>
                <span>완료 강의수</span>
              </Col>
              <Col>
                <h2 className="text-default">{myChartData.doneAssignment}</h2>
                <span>완료 수업수</span>
              </Col>
              <Col>
                <h2 className="text-default">{myChartData.doneClass}</h2>
                <span>제출 완료 과제수</span>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <CardBody className="chart-card">
            <h5 className="mb-4">🎖 스킬 태그</h5>
            {myChartData.tags.map((tag, index) => {
              return (
                <Badge key={index} color={tag.color} pill className="chart-badge">
                  {tag.name} | {tag.count}
                </Badge>
              );
            })}
          </CardBody>
        </Card>
      </Col>
    </Row>
  </>;
}

export default LectureChart;
