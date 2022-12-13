import React, { useState, useEffect } from 'react';
import BasketListCard from './BasketListCard/BasketListCard';
import './BasketList.scss';

const BasketList = () => {
  const [basketProduct, setBasketProduct] = useState([]);
  const [checkedProduct, setCheckedProduct] = useState([]);

  const getCartData = () => {
    fetch(`/`, {
      //'http://172.20.10.3:3000/carts/user'
      //'/data/cartList.json'
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setBasketProduct(data.getCartbyId)); //data.getCartbyId
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className="basket">
      <div className="basket-table">
        <div className="basket-info">상품정보</div>
        <div className="basket-num">수량</div>
        <div className="basket-price">가격</div>
      </div>
      <ul className="basket-item">
        <li>
          <div className="basket-info">
            [첫구매 무료] 초신선 돼지 삼겹살 구이용
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BasketList;
