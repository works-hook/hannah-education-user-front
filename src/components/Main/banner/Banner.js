import {useEffect, useState} from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import "../../../assets/css/custom.css";
import {getBanners, ping} from "../../../actions/MainActions";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    if (banners.length < 1) {
      const fetchData = () => getBanners();
      fetchData().then(response => setBanners(response.data));
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = activeIndex === banners.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? banners.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = banners.map((item) => {
    return (
      <CarouselItem
        key={item.bannerId}
      >
        <div className="banner-box">
          <div className="banner-image" style={{"background": item.backgroundColor}}>
            <img src={item.imageUrl} alt={item.altText}/>
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
            items={banners}
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