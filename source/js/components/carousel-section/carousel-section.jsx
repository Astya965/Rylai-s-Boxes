import React, {PureComponent} from "react";
import Card from "../card/card.jsx";
import Slider from "infinite-react-carousel";
import {extendObject} from "../../utils/util.js";

class CarouselSection extends PureComponent {
  constructor(props) {
    super(props);

    this.sliderRef = null;

    this.state = {
      settings: {
        swipe: false,
        pauseOnHover: false,
        autoplay: false,
        autoplayScroll: 3,
        autoplaySpeed: 100,
        initialSlide: 1,
        slidesToShow: 5,
        arrowsBlock: false,
        centerPadding: 0,
        duration: 200,
      }
    }

    this._onButtonClick = this._onButtonClick.bind(this);
  };

  _onButtonClick() {
    console.log(1);
    this.sliderRef.slickPlay();

    setTimeout(() => this.sliderRef.slickPause(),  4400);

  };

  render() {
    return (
      <section className="carousel-section">
          <div className="carousel-section__inner">
            <div className="carousel">
              <Slider {...this.state.settings}  ref={(ele) => {this.sliderRef = ele; window.sliderRef = ele;}}>
                {this.props.lootboxes.map((box) => (
                  <Card boxinfo={box} key={box.id}/>
                ))}
              </Slider>
            </div>
          </div>
          <button className="carousel-section__btn btn" type="button" onClick={this._onButtonClick}>Открыть</button>
        </section>
    );
  }
}

export default CarouselSection;
