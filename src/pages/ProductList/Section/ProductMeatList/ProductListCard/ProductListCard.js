import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../../../components/Modal/Modal';
import './ProductListCard.scss';
import Cart from '../../../../../assets/CartImage/blackCart.png';

const ProductListCard = ({ meat }) => {
  //const { meat.id, meat.name, meatImage, meatPrice } = meat;
  const [openModal, setOpenModal] = useState(false);

  const ModalClick = () => {
    setOpenModal(true);
  };
  console.log(meat);
  return (
    <li className="productListCard">
      <Link to={`/product-page/${meat.id}`}>
        <div className="productListItem">
          <img src={meat.image} alt={meat.name} className="productListImage" />
        </div>
        <div className="productListInformation">
          {meat.name}
          <div className="productListPriceInformation">
            {Math.floor(meat.price)}원
          </div>
        </div>
      </Link>
      <div className="cartIconWrapper">
        <div>
          <img
            src={Cart}
            className="cartIcon"
            alt="장바구니"
            onClick={ModalClick}
          />
          {openModal && (
            <Modal
              setOpenModal={setOpenModal}
              meatId={meat.id}
              meatName={meat.name}
              meatPrice={meat.price}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductListCard;
