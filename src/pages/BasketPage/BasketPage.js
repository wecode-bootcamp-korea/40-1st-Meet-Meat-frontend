import React, { useEffect, useState } from 'react';
import BasketListCard from './Section/BasketList/BasketListCard/BasketListCard';
import ReceiptSection from './Section/ReceiptSection/ReceiptSection';
import './BasketPage.scss';

const BasketPage = () => {
  const [product, setProduct] = useState([]);
  const [checkedProduct, setCheckedProduct] = useState([]);
  const [countProduct, setCountProduct] = useState([]);
  const [checkedPriceList, setCheckedPriceList] = useState([]);
  const [checkedProductTotal, setCheckedProductTotal] = useState(0);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    setCheckedPriceList(
      checkedProduct.map(checkedProduct => {
        return checkedProduct.price * checkedProduct.total_quantity;
      })
    );
  }, [checkedProduct, countProduct]);

  useEffect(() => {
    setCheckedProductTotal(
      checkedPriceList.reduce((acc, cur) => {
        return (acc += cur);
      }, 0)
    );
  }, [checkedPriceList]);

  const singlePriceHandler = (newAmount, idx) => {
    let newBasketProduct = [...product.basketList];
    let newCheckedProduct = [...checkedProduct];
    newBasketProduct[idx].total_quantity = newAmount;
    newCheckedProduct[idx].total_quantity = newAmount;
    setCheckedProduct(newCheckedProduct);
    setProduct(newBasketProduct);
    setCountProduct(newCheckedProduct);
  };

  const removeProduct = id => {
    setProduct(
      product.basketList.filter(product => {
        return product.product_id !== id;
      })
    );
    setCheckedProduct(
      checkedProduct.filter(check => {
        return check.product_id !== id;
      })
    );
  };

  const childCheckRemove = (productDetail, checked) => {
    checked
      ? setCheckedProduct([
          ...checkedProduct,
          { ...productDetail, checked: checked },
        ])
      : setCheckedProduct(
          checkedProduct.filter(check => {
            return check.product_id !== productDetail.product_id;
          })
        );
  };

  return (
    <div className="basket-page">
      <div className="basket-name">장바구니</div>
      <div className="basket-flex">
        <div className="basket">
          <div className="basket-table">
            <div className="basket-info">상품정보</div>
            <div className="basket-num">수량</div>
            <div className="basket-price">가격</div>
          </div>
          <ul className="basket-item">
            {product.basketList &&
              product.basketList.map((product, idx) => (
                <BasketListCard
                  product={product}
                  key={product.product_id}
                  idx={idx}
                  childCheckRemove={childCheckRemove}
                  removeProduct={removeProduct}
                  singlePriceHandler={singlePriceHandler}
                />
              ))}
          </ul>
        </div>

        <ReceiptSection
          product={product}
          checkedProductTotal={checkedProductTotal}
        />
      </div>
    </div>
  );
};

export default BasketPage;
