import React, { useEffect, useState } from 'react';
import BasketList from './Section/BasketList/BasketList';
import ReceiptSection from './Section/ReceiptSection/ReceiptSection';
import './BasketPage.scss';

const BasketPage = () => {
  const [basketProduct, setBasketProduct] = useState([]);
  console.log(basketProduct);
  //GET
  const getCartData = () => {
    fetch(`/data/basketList.json`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setBasketProduct(data.basketList));
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className="basket-page">
      <div className="basket-name">장바구니</div>
      <div className="basket-flex">
        <BasketList basketProduct={basketProduct} />
        <ReceiptSection basketProduct={basketProduct} />
      </div>
    </div>
  );
};

export default BasketPage;
