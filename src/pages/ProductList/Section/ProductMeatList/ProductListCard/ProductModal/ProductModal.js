import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import './ProductModal.scss';

export default function ProductModal({
  open,
  onClose,
  children,
  productName,
  priceAmount,
  sendToCart,
}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style" />
      <div className="modal-style">
        <button className="close-modal" onClick={onClose}>
          X
        </button>
        <div className="modal-product-name setting-center">
          <h4>{productName}</h4>
        </div>
        {children}
        <div className="custom-order-container">
          <span className="custom-order-title">옵션선택</span>
          <div className="custom-order-wrapper">
            <select className="custom-order">
              <option value="0">보통 (16mm)</option>
              <option value="1">얇게 (11mm)</option>
              <option value="2">두껍 (24mm)</option>
            </select>
          </div>
        </div>
        <div className="modal-price-wrapper">
          <span className="modal-price">{priceAmount}원</span>
        </div>
        <div className="btn-wrapper">
          <Link to="/cart">
            <button className="buy-now" onClick={sendToCart}>
              바로구매
            </button>
          </Link>
          <button className="to-cart" onClick={onClose}>
            장바구니
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}
