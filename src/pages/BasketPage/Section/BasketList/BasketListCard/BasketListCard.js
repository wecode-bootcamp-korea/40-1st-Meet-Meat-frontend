import React from 'react';
import './BasketListCard.scss';

const BasketListCard = ({ productInfo, checkedItem, handleSingleCheck }) => {
  const { id, name, total_quantity, total_price, price, image } = productInfo;
  const sumPrice = { price } * { total_quantity };
  console.log(sumPrice);
  // const plusQuantity = () => {
  //   onChangeProps(products_id, 'quantity', total_quantity + 1);
  //   patchAmount(products_id, total_quantity + 1);
  //   patchAmount();
  // };

  // const minusQuantity = () => {
  //   onChangeProps(
  //     products_id,
  //     'quantity',
  //     total_quantity === 1 ? 1 : total_quantity - 1
  //   );
  //   patchAmount(products_id, total_quantity - 1);
  //   patchAmount();
  // };

  return (
    <div className="BasketListCard">
      <li>
        <div className="check_area">
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
        <div className="product_info">
          <p className="name">
            {name}
            <span className="option">100g</span>
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
        <p className="price">{total_price} 원</p>
      </li>
    </div>
  );
};

export default BasketListCard;
