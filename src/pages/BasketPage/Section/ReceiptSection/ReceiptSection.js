import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReceiptSection.scss';

const ReceiptSection = ({ checkedProductTotal }) => {
  const navigate = useNavigate();
  const moveOrderPage = () => navigate('/order-page');
  const moveProductList = () => navigate('/product-list/전체');

  return (
    <div className="receiptSection">
      <div className="payment-title">
        <div className="payment-name">총 상품 금액</div>
        <span className="payment-money">
          {Number(checkedProductTotal).toLocaleString()}
        </span>
      </div>
      <div className="payment-expectation">
        <div className="expectation-name">예상결제금액</div>
        <div className="expectation-money">
          {' '}
          {Number(checkedProductTotal).toLocaleString()}
        </div>
      </div>
      <div className="payment-button">
        <button className="basket-order" onClick={moveOrderPage}>
          전체상품 주문하기
        </button>
        <button className="basket-out" onClick={moveProductList}>
          쇼핑계속하기
        </button>
      </div>
    </div>
  );
};

export default ReceiptSection;
