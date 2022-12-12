import React from 'react';
import { Link } from 'react-router-dom';

import './ProductListCard.scss';

const ProductListCard = ({ meat }) => {
  const { goToDetails, meatId, meatName, meatImage, meatPrice } = meat;

  return (
    <li className="productListItem">
      <Link to={`/product-page/${meatId}`}>
        <div className="productListItem">
          <img
            src={meatImage}
            alt={meatName}
            className="productListImage"
            onClick={goToDetails}
          />
          <div className="cartIconWrapper">
            <img
              src="./images/cartImage/blackCart.png"
              className="cartIcon"
              alt="장바구니"
            />
          </div>
        </div>
        <div className="productListInformation">
          {meatName}
          <div className="productListPriceInformation">{meatPrice}</div>
        </div>
      </Link>
    </li>
  );
};

export default ProductListCard;
