import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Option.scss';

const Option = ({ productDetail }) => {
  const { id, name, price, weight, img, size } = productDetail;
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const decreaseCount = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const increaseCount = () => {
    setCount(prev => prev + 1);
  };

  const handleBtn = button => {
    if (button === 'buy') {
      fetch(`/data/basketList.json/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('Token'),
        },
      })
        .then(response => {
          if (response.ok === true) {
            return response.json();
          }
          alert('장바구니 페이지로 이동합니다!');
        })
        .then(result => {
          navigate(`/basket-page`);
        });
    } else if (button === 'basket') {
      fetch(`/data/basketList.json/`, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then(response => {
          if (response.ok === true) {
            return response.json();
          }
          alert('장바구니에 상품이 담겼습니다!');
        })
        .then(result => {});
    }
  };

  return (
    <div className="product-page1">
      <img className="product-image" src={img} alt="고기사진" />
      <div className="product-infor">
        <div className="product-name">{name}</div>
        <div className="product-write">100g 당 3,550원</div>
        <div className="product-price">
          기준가 {price}원({weight}g)
        </div>
        <div className="product-option">
          옵션
          <select className="menu-trigger">
            {size?.map(option => {
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
            <button className="minus" onClick={decreaseCount}>
              -
            </button>
            <div className="number">{count}</div>
            <button className="plus" onClick={increaseCount}>
              +
            </button>
          </div>
        </div>
        <div className="product-btn">
          <button
            onClick={() => {
              handleBtn('buy');
            }}
            className="product-buy"
          >
            바로구매
          </button>
          <button
            onClick={() => {
              handleBtn('basket');
            }}
            className="product-basket"
          >
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
};

export default Option;
