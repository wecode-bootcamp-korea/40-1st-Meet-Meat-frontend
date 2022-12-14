import React from 'react';
import './BasketListCard.scss';

const BasketListCard = ({
  basketProduct,
  productInfo,
  checkedItem,
  handleSingleCheck,
}) => {
  const { id, name, total_quantity, price, image } = productInfo;

  // console.log(totalPrice);
  const totalPrice = price * total_quantity;

  const plus = () => {
    onChangeProps(option_products_id, 'quantity', total_quantity + 1);
    patchAmount(option_products_id, total_quantity + 1);
    patchAmount();
  };

  const minus = () => {
    onChangeProps(
      option_products_id,
      'quantity',
      quantity === 1 ? 1 : total_quantity - 1
    );
    patchAmount(option_products_id, total_quantity - 1);
    patchAmount();
  };
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
          <button className="box" onClick={minus}>
            <i className="fa-solid fa-minus" /> -
          </button>
          <p className="box">{total_quantity}</p>
          <button className="box" onClick={plus}>
            <i className="fa-solid fa-plus" />+
          </button>
        </div>
        <p className="price">{totalPrice} 원</p>
        <button className="deleteBtn">x</button>
      </li>
    </div>
  );
};

export default BasketListCard;
