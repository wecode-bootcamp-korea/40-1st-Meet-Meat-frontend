import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ meatList }) => {
  const { meatName, meatImage, meatPrice } = meatList;
  return (
    <li>
      <div className="bestProductItem">
        <img src={meatImage} alt="meat" className="productImage" />
      </div>
      <div className="productInformation">
        {meatName}
        <div className="productPriceInformation">{meatPrice}</div>
      </div>
    </li>
  );
};

export default ProductCard;
