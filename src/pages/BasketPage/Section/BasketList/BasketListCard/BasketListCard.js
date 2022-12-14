import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BasketListCard.scss';

const BasketListCard = ({ product, idx, removeProduct, childCheckRemove }) => {
  const [total_quantity, setQuantity] = useState(product.total_quantity);
  const [checkBoolean, setCheckBoolean] = useState(true);

  const total = product.price * total_quantity;

  const minusCount = () => {
    setQuantity(amount => amount - 1);
  };

  const plusCount = () => {
    setQuantity(amount => amount + 1);
  };

  const minusHandler = () => {
    fetch(`/data/basketList.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        amount: -1,
        productId: product.product_id,
      }),
    });
  };

  const plusHandler = () => {
    fetch(`/data/basketList.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        amount: +1,
        productId: product.product_id,
      }),
    });
  };

  const singleDeleteHandler = () => {
    fetch(`/data/basketList.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        productId: product.product_id,
      }),
    });
  };

  return (
    <div className="BasketListCard">
      <li>
        <div>
          <input
            type="checkbox"
            checked={checkBoolean}
            title="선택"
            onChange={e => {
              childCheckRemove(product, e.target.checked);
              setCheckBoolean(e.target.checked);
            }}
          />
          <Link to={`/product-page/${product.product_id}`} />
        </div>
        <img src={product.image} alt="sample" />
        <div className="productInfo">
          <p className="name">
            {product.name}
            <span className="option">200g</span>
          </p>
        </div>
        <div className="amount_box">
          <button
            className="box"
            onClick={() => {
              minusCount();
              minusHandler();
            }}
          >
            <i className="fa-solid fa-minus" /> -
          </button>
          <p className="box">{total_quantity}</p>
          <button
            className="box"
            onClick={() => {
              plusCount();
              plusHandler();
            }}
          >
            <i className="fa-solid fa-plus" />+
          </button>
        </div>
        <p className="price">{total} 원</p>
        <button
          className="deleteBtn"
          id={idx}
          onClick={() => {
            removeProduct();
            singleDeleteHandler();
          }}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default BasketListCard;
