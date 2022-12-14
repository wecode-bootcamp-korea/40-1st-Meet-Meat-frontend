import React from 'react';
import './Promotion.scss';
import { Link } from 'react-router-dom';

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="promotionPhrase">
        초신선 삼겹살 <br />
        2인분을 드려요!
      </div>
      <div>
        <Link to="/sign-up">
          <button className="promotionBtn"> 혜택 받으러 가기</button>
        </Link>
      </div>
    </div>
  );
};

export default Promotion;
