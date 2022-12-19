import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../../../components/Modal/Modal';
import './ProductListCard.scss';

const ProductListCard = ({ meat }) => {
  console.log(meat);
  const { meatId, meatName, meatImage, meatPrice } = meat;
  const [openModal, setOpenModal] = useState(false);

  const ModalClick = () => {
    setOpenModal(true);
  };

  return (
    <li className="productListCard">
      <Link to={`/product-page/${meat.id}`}>
        <div className="productListItem">
          <img src={meat.image} alt={meat.name} className="productListImage" />
        </div>
        <div className="productListInformation">
          {meat.name}
          <div className="productListPriceInformation">{meat.price}</div>
        </div>
      </Link>
      <div className="cartIconWrapper">
        <div>
          <img
            src="./images/cartImage/blackCart.png"
            className="cartIcon"
            alt="장바구니"
            onClick={ModalClick}
          />
          {openModal && (
            <Modal
              setOpenModal={setOpenModal}
              meatId={meatId}
              meatName={meatName}
              meatPrice={meatPrice}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductListCard;
