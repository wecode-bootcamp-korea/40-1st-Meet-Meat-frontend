import React, { useState } from 'react';
import Thickness from './Thickness.js/Thickness';

import './Option.scss';

const Option = ({ data }) => {
  const [number, setNumber] = useState(1);
  const plus = () => {
    setNumber(number => number + 1);
  };
  const minus = () => {
    if (number < 2) {
      setNumber(1);
      return;
    }
    setNumber(number => number - 1);
  };

  return (
    <div className="product-page1">
      <img className="product-image" src={data.img} alt="고기사진" />
      <div className="product-infor">
        <div className="product-name">{data.name}</div>
        <div className="product-write">100g 당 3,550원</div>
        <div className="product-price">
          기준가 {data.price}원({data.weight}g)
        </div>
        <div className="product-option">
          옵션
          <Thickness thickness={data.thick} />
        </div>
        <div className="product-result">
          <div className="product-number">
            수량
            <button className="minus" onClick={minus}>
              -
            </button>
            <div className="number">{number}</div>
            <button className="plus" onClick={plus}>
              +
            </button>
          </div>
        </div>
        <div className="product-btn">
          <button className="product-buy">바로구매</button>
          <button className="product-basket">장바구니</button>
        </div>
      </div>
    </div>
  );
};

export default Option;
