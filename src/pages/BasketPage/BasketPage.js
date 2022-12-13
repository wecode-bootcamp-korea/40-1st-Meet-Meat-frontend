import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketList from './Section/BasketList/BasketList';
import ReceiptPage from './Section/ReceiptSection/ReceiptSection';
import './BasketPage.scss';

const BasketPage = () => {
  const navigate = useNavigate();

  return (
    <div className="basket-page">
      <div className="basket-name">장바구니</div>
      <div className="basket-flex">
        <BasketList />
        <ReceiptPage />
      </div>
    </div>
  );
};

export default BasketPage;
