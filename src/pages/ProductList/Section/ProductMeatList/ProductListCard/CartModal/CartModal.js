import React, { useState } from 'react';
import ProductMeatList from '../../ProductMeatList';
import './CartModal.scss';

const CartModal = () => {
  let [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  function Modal() {
    return (
      <div className="cartModal">
        <button className="closeBtn" onClick={closeModal}>
          X
        </button>
        <h4>초신선 돼지 삼겹살 구이용</h4>
        <div>갯수</div>
        <div>옵션선택</div>
        <div>보통</div>
        <div>meatPrice</div>
      </div>
    );
  }
  return (
    <div>
      <img
        src="./images/cartImage/blackCart.png"
        className="cartImg"
        onClick={() => {
          setModal(true);
        }}
      />
      {modal == true ? <Modal /> : null}
    </div>
  );
};

export default CartModal;
