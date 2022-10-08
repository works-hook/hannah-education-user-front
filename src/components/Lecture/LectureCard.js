import {
  Card, CardBody, Badge
} from "reactstrap";

const LectureCard = ({title, img, tags, className}) => {

  return (<>
    <Card className={"card-lift--hover shadow border-0 mb-3 " + className}>
      <CardBody>
        <img
          alt={img}
          className="img-fluid rounded lecture-card-img"
          src={img}
        />
        <h6 className="text-default mt-2">
          {title}
        </h6>
        <div className="card-badge">
          {tags.map((tag, index) => {
            return (
              <Badge key={index} color={tag.color} pill className="mr-1">
                {tag.name}
              </Badge>
            );
          })}
        </div>

      </CardBody>
    </Card>
  </>);
}

export default LectureCard;
