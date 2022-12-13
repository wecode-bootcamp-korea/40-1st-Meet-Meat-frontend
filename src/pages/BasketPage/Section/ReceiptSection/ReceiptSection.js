import React from 'react';
import './ReceiptSection.scss';

const ReceiptSection = () => {
  return (
    <div className="receiptSection">
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
  );
};

export default ReceiptSection;
