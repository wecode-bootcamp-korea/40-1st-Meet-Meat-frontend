import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListCard.scss';

const ProductListCard = ({ meat }) => {
  const { meatId, meatName, meatImage, meatPrice } = meat;

  return (
    <li className="productListCard">
      <Link to={`/product-page/${meatId}`}>
        <div className="productListItem">
          <img src={meatImage} alt={meatName} className="productListImage" />
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
