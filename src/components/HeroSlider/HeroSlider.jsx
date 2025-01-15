import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HomeSlide1 from '../HomeSlide1/Silde1';
import HomeSlide2 from '../HomeSlide2/Slide2';
import HomeSlide3 from '../HomeSlide3/Slide3';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOnChange = (index) => {
    if (index === 2) {
      setCurrentSlide(0); // Reset to first slide when it reaches the last
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows
      showThumbs={false}
      showStatus={false}
      interval={5000}
      selectedItem={currentSlide}
      onChange={handleOnChange}
    >
      <div className="slide">
        <HomeSlide1 />
      </div>
      <div className="slide">
        <HomeSlide2 />
      </div>
      <div className="slide">
        <HomeSlide3 />
      </div>
    </Carousel>
  );
};

export default HeroSlider;
