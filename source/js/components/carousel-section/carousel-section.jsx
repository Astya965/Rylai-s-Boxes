import React from "react";
import Card from "../card/card.jsx";
import Slider from "infinite-react-carousel";

const CarouselSection = (props) => {
  const {lootboxes} = props;

  const settings =  {
    autoplay: false,
    autoplayScroll: 2,
    autoplaySpeed: 10,
    centerMode: true,
    initialSlide: 1,
    slidesToShow: 4,
    arrowsBlock: false,
    centerPadding: 0,
    duration: 300,
  };

  return (
    <section className="carousel-section">
        <div className="carousel-section__inner">
          <div className="carousel">
            <Slider {...settings}>
              {lootboxes.map((box) => (
                <Card boxinfo={box} key={box.id}/>
              ))}
            </Slider>
          </div>
        </div>
        <button className="carousel-section__btn btn" type="button">Открыть</button>
      </section>
  );
}

export default CarouselSection;
