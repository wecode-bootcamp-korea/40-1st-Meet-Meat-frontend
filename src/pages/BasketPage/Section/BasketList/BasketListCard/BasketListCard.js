import React, { useEffect, useState } from 'react';
import './BasketListCard.scss';

const BasketListCard = ({
  product,
  idx,
  removeProduct,
  childCheckRemove,
  singlePriceHandler,
  setProduct,
  setCheckedProduct,
}) => {
  const [total_quantity, setTotal_quantity] = useState(product.total_quantity);
  const [checkBoolean, setCheckBoolean] = useState(true);

  // useEffect(() => {
  //   singlePriceHandler(total_quantity, idx);
  // }, [total_quantity]);

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

  // TODO: 상품삭제 api 완성 후 기능 확인 후 수정해야함.
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
    fetch(`/data/basketList.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('Token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        setProduct(result);
        setCheckedProduct(
          result.basketList.map(item => {
            return { ...item, checked: true };
          })
        );
      });
  };

  const total = product.price * total_quantity;

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
            disabled={total_quantity < 2}
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
