import React, { useEffect, useState } from 'react';
import './BasketListCard.scss';

const BasketListCard = ({
  product,
  idx,
  removeProduct,
  childCheckRemove,
  singlePriceHandler,
}) => {
  const [total_quantity, setTotal_quantity] = useState(product.total_quantity);
  const [checkBoolean, setCheckBoolean] = useState(true);

  const minusCount = () => {
    setTotal_quantity(amount => amount - 1);
  };

  const plusCount = () => {
    setTotal_quantity(amount => amount + 1);
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

  const total = product.price * total_quantity;

  const validBtn = check => {
    return check ? false : true;
  };

  const validation = check => {
    return total_quantity > 1 ? false : true;
  };

  useEffect(() => {
    singlePriceHandler(total_quantity, idx);
  }, [total_quantity]);

  return (
    <div className="BasketListCard">
      <li>
        <div className="productInstruction">
          <input
            type="checkbox"
            checked={checkBoolean}
            title="선택"
            onChange={event => {
              childCheckRemove(product, event.target.checked);
              setCheckBoolean(event.target.checked);
            }}
          />
          <img src={product.image} alt="meat_image" />

          <div className="productInfo">
            <p className="name">
              {product.name}
              <span className="option">200g</span>
            </p>
          </div>
        </div>
        <div className="amount_box">
          <button
            className="box"
            onClick={() => {
              minusCount();
              minusHandler();
            }}
            disabled={(validBtn(checkBoolean), validation(total_quantity))}
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
