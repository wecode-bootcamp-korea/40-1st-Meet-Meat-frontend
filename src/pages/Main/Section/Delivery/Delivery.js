import React from 'react';
import './Delivery.scss';
const Delivery = () => {
  return (
    <div className="deliveryLayout">
      <div className="phraseLayout">
        <h1 className="deliveryWord">초신선 배송</h1>
        <div className="deliveryPhrase">
          정육각의 초신선함을 식탁까지 온전하게
        </div>
      </div>
      <div className="deliveryIcon">
        <img src="images/Main/delivery-256.png" alt="배달이미지" />
      </div>
    </div>
  );
};

export default Delivery;
