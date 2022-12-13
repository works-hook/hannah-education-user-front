import {
  Container, Row
} from "reactstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../../assets/css/custom.css";
import LectureCard from "../../Lecture/LectureCard";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMostLikeLectures, getMostTakenLectures} from "../../../actions/LecturesActions";

// custom enum
const CardType = {
  COMPLETED: 'completed',
  LIKE: 'like'
};
Object.freeze(CardType);


const LectureCards = ({title, type}) => {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    if (type === CardType.COMPLETED) {
      const fetchData = async () => getMostTakenLectures();
      fetchData().then(response => setLectures(response.data));
    }
    if (type === CardType.LIKE) {
      const fetchData = async () => getMostLikeLectures();
      fetchData().then(response => setLectures(response.data));
    }
  }, []);

  const breakpoints = {
    1400: {
      slidesPerView: 4,
    },
    1700: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
  };

  return (<>
    <Container className="my-6">
      <Row className="custom-swiper">
        <h3 className="cards-header">{title}</h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={breakpoints}
          pagination={{clickable: true}}
          autoplay={{delay: 5000}}
        >
          {lectures.map((data) => {
            return (
              <SwiperSlide key={data.lectureId}>
                <Link to={"/lectures/" + data.lectureId}>
                  <LectureCard
                    key={data.lectureId}
                    title={data.title}
                    img={data.thumbnailImgUrl}
                    tags={data.tags}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Row>
    </Container>
  </>);
}

export { CardType };

export default LectureCards;
