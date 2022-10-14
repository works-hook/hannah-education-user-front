import {Badge, Col, Container, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row} from "reactstrap";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/custom.css";
import LectureCard from "../Lecture/LectureCard.js";
import Pagination from "../utils/Pagination.js";
import {useState} from "react";

const tags = [
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
    color: "primary",
  },
  {
    name: "Spring boot",
  },
  {
    name: "콘텐츠마케팅",
  },
  {
    name: "Figma",
  },
  {
    name: "Effective",
  },
  {
    name: "Backend",
  },
  {
    name: "nestJS",
  },
  {
    name: "node.js",
  },
  {
    name: "MongoDB",
  },
  {
    name: "iOS",
  },
  {
    name: "Swift",
  },
  {
    name: "Kafka",
  },
  {
    name: "데이터 엔지니어링",
  },
  {
    name: "English",
  },
  {
    name: "Git",
  },
  {
    name: "Github",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "TypeScript",
  },
  {
    name: "TDD",
  },
  {
    name: "Network",
  },
  {
    name: "디지털 리터러시",
  },
  {
    name: "C#",
  },
  {
    name: "Django",
  },
  {
    name: "Python",
  },
];

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
  {
    lectureId: 13,
    title: "아이폰 앱 개발 기본편(iOS 개발)",
    img: "https://cdn.inflearn.com/public/courses/328714/cover/c74cff54-6629-416f-8512-22ac1a4bf484/328714-eng.jpeg",
    tags: [
      {
        name: "iOS",
        color: "primary",
      },
      {
        name: "Swift",
        color: "warning",
      },
    ]
  },
  {
    lectureId: 1233421,
    title: "원어민 수준 찍는 영어회화 공부방법",
    img: "https://cdn.inflearn.com/public/courses/328999/cover/79e6611a-e32f-42c1-8a9e-374c41b3c1cf/328999-eng.png",
    tags: [
      {
        name: "English",
        color: "default",
      },
    ]
  },
  {
    lectureId: 16,
    title: "모두의 깃 & 깃허브",
    img: "https://cdn.inflearn.com/public/courses/329344/cover/012ac485-48dd-43a4-b152-184605b2cff5/329344-eng.png",
    tags: [
      {
        name: "Git",
        color: "yellow",
      },
      {
        name: "Github",
        color: "default",
      },
    ]
  },
  {
    lectureId: 17,
    title: "따라하며 배우는 리액트 A-Z",
    img: "https://cdn.inflearn.com/public/courses/329170/cover/223c54c0-9220-4937-836d-70a36be3eb1c/329170-eng.png",
    tags: [
      {
        name: "React",
        color: "info",
      },
      {
        name: "Next.js",
        color: "info",
      },
      {
        name: "TypeScript",
        color: "primary",
      },
      {
        name: "TDD",
        color: "success",
      },
    ]
  },
  {
    lectureId: 21,
    title: "서버와 인터넷 그리고 데이터 이야기",
    img: "https://cdn.inflearn.com/public/courses/328897/cover/0803d412-5041-472f-be5c-ef5e3b9b00b2/328897-eng.png",
    tags: [
      {
        name: "Network",
        color: "primary",
      },
      {
        name: "디지털 리터러시",
        color: "warning",
      },
    ]
  },
  {
    lectureId: 31,
    title: "쉽게 배우는 C# 알고리즘 프로그래밍",
    img: "https://cdn.inflearn.com/public/courses/328910/cover/6a50bfb3-47a9-49fb-9271-4c26562d05a5/328910-eng.png",
    tags: [
      {
        name: "C#",
        color: "default",
      },
    ]
  },
  {
    lectureId: 699,
    title: "Django 프레임워크 제대로 배우기",
    img: "https://cdn.inflearn.com/public/courses/328671/cover/5ac45f32-1f51-4cdd-9f4a-5f7827ed0a15/328671-eng.png",
    tags: [
      {
        name: "Django",
        color: "success",
      },
      {
        name: "Python",
        color: "info",
      },
    ]
  },
  {
    lectureId: 153,
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
    lectureId: 1245,
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
    lectureId: 543,
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
    lectureId: 234,
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
    lectureId: 63,
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
    lectureId: 356,
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
    lectureId: 4573,
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
  {
    lectureId: 55678,
    title: "아이폰 앱 개발 기본편(iOS 개발)",
    img: "https://cdn.inflearn.com/public/courses/328714/cover/c74cff54-6629-416f-8512-22ac1a4bf484/328714-eng.jpeg",
    tags: [
      {
        name: "iOS",
        color: "primary",
      },
      {
        name: "Swift",
        color: "warning",
      },
    ]
  },
  {
    lectureId: 456,
    title: "모두의 깃 & 깃허브",
    img: "https://cdn.inflearn.com/public/courses/329344/cover/012ac485-48dd-43a4-b152-184605b2cff5/329344-eng.png",
    tags: [
      {
        name: "Git",
        color: "yellow",
      },
      {
        name: "Github",
        color: "default",
      },
    ]
  },
  {
    lectureId: 3245,
    title: "따라하며 배우는 리액트 A-Z",
    img: "https://cdn.inflearn.com/public/courses/329170/cover/223c54c0-9220-4937-836d-70a36be3eb1c/329170-eng.png",
    tags: [
      {
        name: "React",
        color: "info",
      },
      {
        name: "Next.js",
        color: "info",
      },
      {
        name: "TypeScript",
        color: "primary",
      },
      {
        name: "TDD",
        color: "success",
      },
    ]
  },
  {
    lectureId: 73,
    title: "서버와 인터넷 그리고 데이터 이야기",
    img: "https://cdn.inflearn.com/public/courses/328897/cover/0803d412-5041-472f-be5c-ef5e3b9b00b2/328897-eng.png",
    tags: [
      {
        name: "Network",
        color: "primary",
      },
      {
        name: "디지털 리터러시",
        color: "warning",
      },
    ]
  },
  {
    lectureId: 3456,
    title: "쉽게 배우는 C# 알고리즘 프로그래밍",
    img: "https://cdn.inflearn.com/public/courses/328910/cover/6a50bfb3-47a9-49fb-9271-4c26562d05a5/328910-eng.png",
    tags: [
      {
        name: "C#",
        color: "default",
      },
    ]
  },
  {
    lectureId: 74562,
    title: "Django 프레임워크 제대로 배우기",
    img: "https://cdn.inflearn.com/public/courses/328671/cover/5ac45f32-1f51-4cdd-9f4a-5f7827ed0a15/328671-eng.png",
    tags: [
      {
        name: "Django",
        color: "success",
      },
      {
        name: "Python",
        color: "info",
      },
    ]
  },
];

const Lectures = () => {
  const [search, setSearch] = useState("");
  const onSearchChange = (e) => setSearch(e.target.value);

  const [searchTags, setSearchTags] = useState([]);
  const onAddSearchTag = (tag) => {
    setSearchTags([...searchTags, tag]);
    console.log(searchTags)
  }
  const offRemoveSearchTag = (tag) => {
    setSearchTags(searchTags.filter(v => v !== tag));
    console.log(searchTags)
  }

  const [page, setPage] = useState(1);
  const offset = (page - 1) * 16;

  const searchData = lectureData.filter((data) => {
    const tagFag = searchTagCheck(data);
    const titleFag = data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    return titleFag && tagFag;
  });

  function searchTagCheck(data) {
    let fag = false;
    if (searchTags.length < 1) {
      fag = true;
    } else {
      data.tags.map((tag) => {
        if (searchTags.includes(tag.name)) fag = true;
      });
    }
    return fag;
  }

  return <>
    <section className="index-section section-shaped">
      <div className="shape shape-style-1 shape-default"/>
    </section>
    <Container className="lecture-container">
      <Row className="justify-content-between">
        <h3 className="mx-4">강의 검색하기</h3>
        <Col xs={4}>
          <FormGroup>
            <InputGroup className="input-group-alternative mb-4">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-zoom-split-in" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Search"
                type="text"
                onChange={ onSearchChange }
                value={ search }
              />
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-2 ml-2">
        {tags.map((tag, index) => {
          return (
            searchTags.includes(tag.name)
              ? <div key={index} className="pointer active" onClick={() => {
                  offRemoveSearchTag(tag.name);
                  setPage(1);
                }}>
                  <Badge pill className="m-1" color={tag.color}>
                    {tag.name}
                    <span aria-hidden="true">&nbsp;&nbsp;&nbsp;×</span>
                  </Badge>
                </div>
              : <div key={index} className="pointer" onClick={() => {
                  onAddSearchTag(tag.name);
                  setPage(1);
                }}>
                  <Badge pill className="m-1" >
                    {tag.name}
                  </Badge>
                </div>
            );
        })}
      </Row>
      <Row className="justify-content-center">
        {searchData.slice(offset, offset + 16).map((data) => {
          return (
            <LectureCard
              className="card-width"
              key={data.lectureId}
              title={data.title}
              img={data.img}
              tags={data.tags}
            />
          );
        })}
      </Row>
      <Row className="justify-content-center mt-3">
        <Pagination
          total={searchData.length}
          limit={16}
          page={page}
          setPage={setPage}
        />
      </Row>
    </Container>
  </>;
}

export default Lectures;
