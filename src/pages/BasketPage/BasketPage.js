import React from 'react';
import './BasketPage.scss';

const BasketPage = () => {
  return (
    <div className="basket-page">
      <h1 className="basket-name">장바구니</h1>
      <div className="basket-flex">
        <div className="basket">
          <div className="basket-table">
            <span className="basket-infor">상품정보</span>
            <span className="basket-num">수량</span>
            <span className="basket-price">가격</span>
          </div>
          <div className="basket-item">
            <div className="item-name">fsdfsd</div>
            <div className="item-num">dfsafsadf</div>
            <div className="item-price">dsafsa</div>
          </div>
        </div>
        <div className="basket-payment">
          <div className="payment-title">
            <div className="payment-name">총 상품 금액</div>
            <span className="payment-money">0원</span>
          </div>
          <div className="payment-expectation">
            <div className="expectation-name">예상결제금액</div>
            <div className="expectation-money">0000원</div>
          </div>
          <div className="payment-button">
            <button className="basket-order">전체상품 주문하기</button>
            <button className="basket-out">쇼핑계속하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
