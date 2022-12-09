import React from 'react';
import './ProductListCard.scss';

const ProductListCard = ({ meatList }) => {
  const { meatName, meatImage, meatPrice } = meatList;
  return (
    <li className="productListItem">
      <div className="productListItem">
        <img src={meatImage} alt={meatName} className="productListImage" />
        <img src="./images/cartImage/blackCart.png" className="cartImg" />
      </div>
      <div className="productListInformation">
        {meatName}
        <div className="productListPriceInformation">{meatPrice}</div>
      </div>
    </li>
  );
};

export default ProductListCard;
