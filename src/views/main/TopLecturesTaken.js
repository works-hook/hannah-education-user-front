import {
  Container, Row
} from "reactstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/custom.css";
import LecturesCard from "./custom/LecturesCard";

const lectureData = [
  {
    lectureId: 1,
    title: "실전! 코틀린과 스프링 부트로 개발",
    img: "https://cdn.inflearn.com/public/courses/329248/cover/302bbe7f-5c3d-49f2-b23a-16f4f51e6ede/329248-eng2.png",
    tags: [
      {
        name: "Java",
        color: "primary",
      },
      {
        name: "Kotlin",
        color: "warning",
      },
      {
        name: "Spring",
        color: "success",
      },
      {
        name: "Spring boot",
        color: "success",
      },
    ]
  },
  {
    lectureId: 6,
    title: "피그마로 콘텐츠 디자인하기",
    img: "https://cdn.inflearn.com/public/courses/327972/cover/0e64ce46-8dfd-4cb8-b6bd-914b87358461/%EC%9D%B8%ED%94%84%EB%9F%B0%20%EB%A9%94%EC%9D%B8.jpg",
    tags: [
      {
        name: "콘텐츠마케팅",
        color: "info",
      },
      {
        name: "Figma",
        color: "warning",
      },
    ]
  },
  {
    lectureId: 2,
    title: "이펙티브 자바 완벽 공략 1부",
    img: "https://cdn.inflearn.com/public/courses/328628/cover/a2479324-d691-404d-b023-18bc5188dd21/328628-eng.png",
    tags: [
      {
        name: "Java",
        color: "primary",
      },
      {
        name: "Effective",
        color: "default",
      },
    ]
  },
  {
    lectureId: 3,
    title: "백엔드 NestJS, 기초부터 심화까지",
    img: "https://cdn.inflearn.com/public/courses/327273/cover/77c59c6c-7f86-4d04-ad98-5593defbf6a6/Subscribe%20for%20more%E1%84%8B%E1%85%B4%20%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB%20(3).png",
    tags: [
      {
        name: "Backend",
        color: "info",
      },
      {
        name: "nestJS",
        color: "warning",
      },
      {
        name: "node.js",
        color: "success",
      },
      {
        name: "MongoDB",
        color: "yellow",
      },
    ]
  },
  {
    lectureId: 7,
    title: "제대로 파는 HTML & CSS - by 얄코",
    img: "https://cdn.inflearn.com/public/courses/328592/cover/515f3c37-aa1c-496f-8fe9-44d3bcb5e5c2/html-css-inflearn%20%EB%B3%B5%EC%82%AC.png",
    tags: [
      {
        name: "HTML/CSS",
        color: "info",
      },
    ]
  },
  {
    lectureId: 4,
    title: "카프카 완벽 가이드 - 코어편",
    img: "https://cdn.inflearn.com/public/courses/329398/cover/5e613ac4-cfe3-4a97-ac6d-929d9cd49647/329398-eng.jpg",
    tags: [
      {
        name: "Kafka",
        color: "info",
      },
      {
        name: "데이터 엔지니어링",
        color: "default",
      },
    ]
  },
  {
    lectureId: 5,
    title: "앨런 iOS 아이폰 앱 개발",
    img: "https://cdn.inflearn.com/public/courses/329052/cover/f158fa4d-c9f6-4b1a-a9e3-0b082f51a792/329052-eng.png",
    tags: [
      {
        name: "Java",
        color: "primary",
      },
      {
        name: "Kotlin",
        color: "warning",
      },
      {
        name: "Spring boot",
        color: "success",
      },
    ]
  },
]

const TopLecturesTaken = () => {
  return (<>
    <Container className="mb-5 mt-5">
      <h3 className="text-default">가장 많이 수강했던 강의들🌟</h3>
      <Row className="custom-swiper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{clickable: true}}
          autoplay={{delay: 2000}}
          breakpoints={{
            1700: {
              slidesPerView: 5,
            },
          }}
        >
          {lectureData.map((data) => {
            return (
              <SwiperSlide key={data.lectureId}>
                <LecturesCard
                  key={data.lectureId}
                  title={data.title}
                  img={data.img}
                  tags={data.tags}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Row>
    </Container>
  </>);
}

export default TopLecturesTaken;
