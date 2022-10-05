import {
    Card, CardBody, Badge
} from "reactstrap";

const LecturesCard = ({title, img, tags}) => {

    return (<>
        <Card className="card-lift--hover shadow border-0 mb-3">
            <CardBody>
                <h6 className="text-default">
                    { title }
                </h6>
                <img
                    alt={ img }
                    className="img-fluid rounded shadow lecture-card-img"
                    src={ img }
                />
                <div className="mt-3">
                    { tags.map((tag, index) => {
                        return (
                            <Badge key={ index } color={ tag.color } pill className="mr-1">
                                { tag.name }
                            </Badge>
                        );
                    })}
                </div>
            </CardBody>
        </Card>
    </>);
}

export default LecturesCard;
