import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductModal from './ProductModal/ProductModal';
import './ProductListCard.scss';

const ProductListCard = ({ meat }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { meatName, meatImage, meatPrice, meatSort } = meat;

  const navigate = useNavigate();

  const goToDetails = e => {
    navigate(`/product-page/${e.target.id}`);
  };

  const sendToCart = () => {
    fetch(`/`);
  };
  return (
    <li className="productListItem">
      <div className="productListItem">
        <img
          src={meatImage}
          alt={meatName}
          className="productListImage"
          onClick={goToDetails}
        />
        <div className="cartIconWrapper">
          <img
            onClick={() => {
              setIsOpen(true);
            }}
            src="./images/cartImage/blackCart.png"
            className="cartIcon"
            alt="장바구니"
          />
          <ProductModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            productName={meatName}
            productSort={meatSort}
            priceAmount={meatPrice}
            sendToCart={sendToCart}
          />
        </div>
      </div>
      <div className="productListInformation">
        {meatName}
        <div className="productListPriceInformation">{meatPrice}</div>
      </div>
    </li>
  );
};

export default ProductListCard;
