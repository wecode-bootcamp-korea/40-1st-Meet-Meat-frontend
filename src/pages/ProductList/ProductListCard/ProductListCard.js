import React from 'react';

const ProductListCard = ({ meatList }) => {
  const { meatName, meatImage, meatPrice } = meatList;
  return (
    <li className="productListItem">
      <div className="productListItem">
        <img src={meatImage} alt={meatName} className="productListImage" />
      </div>
      <div className="productListInformation">
        {meatName}
        <div className="productListPriceInformation">{meatPrice}</div>
      </div>
    </li>
  );
};

export default ProductListCard;
