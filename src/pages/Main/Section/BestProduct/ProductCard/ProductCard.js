import React from 'react';

const ProductCard = ({ meatList }) => {
  const { meatName, meatImage, meatPrice } = meatList;
  return (
    <li>
      <div className="BestProductItem">
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
