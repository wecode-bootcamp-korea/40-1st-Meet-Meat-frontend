import React, { useState } from 'react';
import White from '../../assets/ProductPage/white.png';
import './productPage1.scss';

const ProductPage1 = props => {
  const [number, setNumber] = useState(1);
  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    setNumber(number - 1);
    number < 2 && setNumber(1);
  };

  return (
    <div className="product-page1">
      <img className="product-image" src={White}></img>
      <div className="product-infor">
        <div className="product-name">초신선 돼지 삼겹살 구이용</div>
        <div className="product-write">100g당 0000원</div>
        <div className="product-price">기준가 00,000원(000g)</div>
        <div className="product-option">
          옵션
          <select className="menu-trigger">
            {MEET_OPTION.map(option => {
              return (
                <option className="option" key={option.id}>
                  {option.option}
                </option>
              );
            })}
          </select>
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

export default ProductPage1;

const MEET_OPTION = [
  { id: 1, option: '얇게(11mm)' },
  { id: 2, option: '보통(16mm)' },
  { id: 3, option: '두껍게(24mm)' },
];
