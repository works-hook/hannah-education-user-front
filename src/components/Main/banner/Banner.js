import {useState} from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import "../../../assets/css/custom.css";

const items = [
  {
    src: 'https://cdn.inflearn.com/public/main_sliders/b86bff3e-14a7-4ef2-8689-132dab058ec9/%5B%E1%84%90%E1%85%A2%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC%5D%E1%84%86%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%86%BC%E1%84%86%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A1%E1%86%BCCS%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8_main_521.png',
    altText: '말랑말랑하고 재밌는 강의로 CS 전공 지식 수혈하세요!',
    caption: '이번 학기 학점, 기술 면접은 뚝딱',
    color: '#56a7f3',
    key: 2,
  },
  {
    src: 'https://cdn.inflearn.com/public/main_sliders/04081c01-4aee-40ad-a500-5260f1cfd508/main_521_%EC%9D%B8%ED%94%84%EB%9F%B0%EC%86%8C%EA%B0%9C.png',
    altText: '함께 성장할 동료를 찾아요',
    caption: '#우리 #함께성장해요 #동료여어디계신가요?',
    color: '#59cf92',
    key: 1,
  },
  {
    src: 'https://cdn.inflearn.com/public/main_sliders/5207c5ee-e72f-4fc1-aad0-6122d2a55956/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%E1%84%86%E1%85%A2%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB_main_521.gif',
    altText: '우리는 성장기회의 평등을 추구합니다',
    caption: '누구나 배움의 기회를 누리고 꿈을 이룰 수 있도록! 함께 배우고 나누고, 성장하세요',
    color: '#38e5ff',
    key: 3,
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
      >
        <div className="banner-box">
          <div className="banner-image" style={{"background": item.color}}>
            <img src={item.src} alt={item.altText}/>
          </div>
        </div>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });


  return (
    <>
      <section className="section section-shaped">
        <div className="shape shape-style-1 shape-default"/>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={5000}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </section>
    </>
  );
}

export default Banner;