import React, { useEffect, useRef, useState } from 'react';
import Carousel1 from '../../assets/Carosel/Carousel1.png';
import Carousel2 from '../../assets/Carosel/Carousel2.png';
import Carousel3 from '../../assets/Carosel/Carousel3.png';
import Left from '../../assets/Carosel/left 2.png';
import Right from '../../assets/Carosel/right 2.png';
import './Carousel.scss';

const Carousel = props => {
  const TOTAL_SLIDE = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDE) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDE);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <div className="carousel">
      <div className="carousel-img" ref={slideRef}>
        <img className="img" src={Carousel1} alt="고기1" />
        <img className="img" src={Carousel2} alt="고기2" />
        <img className="img" src={Carousel3} alt="고기3" />
      </div>
      <img src={Left} className="button-left" onClick={nextSlide} alt="왼쪽" />
      <img
        src={Right}
        className="button-right"
        onClick={prevSlide}
        alt="오른쪽"
      />
    </div>
  );
};
export default Carousel;
