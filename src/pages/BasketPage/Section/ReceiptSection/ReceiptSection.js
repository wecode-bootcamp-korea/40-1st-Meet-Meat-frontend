import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReceiptSection.scss';

const ReceiptSection = ({ basketProduct }) => {
  const { total_price } = basketProduct;
  const navigate = useNavigate();
  const moveOrderPage = () => navigate('/order-page');
  const moveProductList = () => navigate('/product-list');
  console.log(basketProduct);
  return (
    <div className="receiptSection">
      <div className="payment-title">
        <div className="payment-name">총 상품 금액</div>
        <span className="payment-money">{total_price}</span>
      </div>
      <div className="payment-expectation">
        <div className="expectation-name">예상결제금액</div>
        <div className="expectation-money">{total_price}</div>
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