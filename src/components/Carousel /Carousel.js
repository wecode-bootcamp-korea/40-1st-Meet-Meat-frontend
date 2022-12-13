import React, { useEffect, useInsertionEffect, useRef, useState } from 'react';
import Carosel1 from '../../assets/Carosel/carosel1.jpg';
import Carosel2 from '../../assets/Carosel/carosel2.jpg';
import Carosel3 from '../../assets/Carosel/carosel3.jpg';
import Left from '../../assets/Carosel/left.png';
import Right from '../../assets/Carosel/right.png';
import './Carousel.scss';

const Carousel = props => {
  const TotalSlide = 2;
  const [slide, setSlide] = useState(0);
  const slideRef = useRef();

  const Next = () => {
    if (slide >= TotalSlide) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  const Back = () => {
    if (slide === 0) {
      setSlide(TotalSlide);
    } else {
      setSlide(slide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${slide}00%)`;
  }, [slide]);
  return (
    <div className="carousel">
      <div className="carousel-img" ref={slideRef}>
        <img className="img" src={Carosel1} alt="고기1" />
        <img className="img" src={Carosel2} alt="고기2" />
        <img className="img" src={Carosel3} alt="고기3" />
      </div>
      <img src={Left} className="button-left" onClick={Next} alt="왼쪽" />
      <img src={Right} className="button-right" onClick={Back} alt="오른쪽" />
    </div>
  );
};
export default Carousel;
