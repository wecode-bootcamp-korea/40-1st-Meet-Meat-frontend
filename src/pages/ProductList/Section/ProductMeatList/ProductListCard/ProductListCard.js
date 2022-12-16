import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../../../components/Modal/Modal';
import './ProductListCard.scss';

const ProductListCard = ({ data }) => {
  const { meatId, meatName, meatImage, meatPrice } = data;
  const [openModal, setOpenModal] = useState(false);

  const ModalClick = () => {
    setOpenModal(true);
  };
  console.log(data);
  return (
    <li className="productListCard">
      <Link to={`/product-page/${meatId}`}>
        <div className="productListItem">
          <img src={meatImage} alt={meatName} className="productListImage" />
        </div>
        <div className="productListInformation">
          {meatName}
          <div className="productListPriceInformation">{meatPrice}</div>
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
