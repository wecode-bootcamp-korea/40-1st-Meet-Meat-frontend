import React from 'react';
import './BasketListCard.scss';

const BasketListCard = ({
  basketProduct,
  productInfo,
  checkedItem,
  handleSingleCheck,
}) => {
  const { id, name, total_quantity, total_price, price, image } = productInfo;

  // console.log(totalPrice);
  console.log(price * total_quantity);
  const totalPrice = price * total_quantity;
  const blankPrice = [];
  const fullPrice = blankPrice.unshift(totalPrice);
  console.log(fullPrice);
  return (
    <div className="BasketListCard">
      <li>
        <div>
          <input
            type="checkbox"
            id={`check${id}`}
            title="선택"
            checked={checkedItem.includes(id)}
            onChange={handleSingleCheck}
          />
          <label htmlFor={`check${id}`} />
        </div>
        <img src={image} alt="sample" />
        <div className="productInfo">
          <p className="name">
            {name}
            <span className="option">200g</span>
          </p>
        </div>
        <div className="amount_box">
          {/* <button className="box" onClick={minusQuantity}>
            <i className="fa-solid fa-minus" /> -
          </button> */}
          <p className="box">{total_quantity}</p>
          {/* <button className="box" onClick={plusQuantity}>
            <i className="fa-solid fa-plus" />+
          </button> */}
        </div>
        <p className="price">{totalPrice} 원</p>
      </li>
    </div>
  );
};

export default BasketListCard;
