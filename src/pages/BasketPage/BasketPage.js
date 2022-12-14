import React, { useEffect, useState } from 'react';
import BasketListCard from './Section/BasketList/BasketListCard/BasketListCard';
import ReceiptSection from './Section/ReceiptSection/ReceiptSection';
import './BasketPage.scss';

const BasketPage = () => {
  const [product, setProduct] = useState([]);
  const [checkedArr, setCheckedArr] = useState([]);
  const [countArr, setCountArr] = useState([]);
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
        setCheckedArr(
          result.basketList.map(item => {
            return { ...item, checked: true };
          })
        );
      });
  }, []);

  useEffect(() => {
    setCheckedPriceList(
      checkedArr.map(checkedArr => {
        return checkedArr.price * checkedArr.total_quantity;
      })
    );
  }, [checkedArr, countArr]);

  useEffect(() => {
    setCheckedProductTotal(
      checkedPriceList.reduce((acc, cur) => {
        return (acc += cur);
      }, 0)
    );
  }, [checkedPriceList]);

  const singlePriceHandler = (newAmount, idx) => {
    let newProductArray = [...product];
    let newCheckedArray = [...checkedArr];
    newProductArray[idx].amount = newAmount;
    newCheckedArray[idx].amount = newAmount;
    setCheckedArr(newCheckedArray);
    setProduct(newProductArray);
    setCountArr(newCheckedArray);
  };

  const removeProduct = id => {
    setProduct(
      product.basketList.filter(product => {
        return product.product_id !== id;
      })
    );
    setCheckedArr(
      checkedArr.filter(check => {
        return check.product_id !== id;
      })
    );
  };

  const childCheckRemove = (productDetail, checked) => {
    checked
      ? setCheckedArr([...checkedArr, { ...productDetail, checked: checked }])
      : setCheckedArr(
          checkedArr.filter(check => {
            return check.product_id !== productDetail.product_id;
          })
        );
  };

  const removeChild = id => {
    let removeProducts;
    id.forEach(
      item =>
        (removeProducts = product.filter(
          product => product.product_id !== item
        ))
    );
    id.forEach(
      item =>
        (removeProducts = removeProducts.filter(
          removeProducts => removeProducts.product_id !== item
        ))
    );
    setProduct(removeProducts);

    let removeCheckedProducts;
    id.forEach(
      item =>
        (removeCheckedProducts = product.filter(
          product => product.product_id !== item
        ))
    );
    id.forEach(
      item =>
        (removeCheckedProducts = removeCheckedProducts.filter(
          removeCheckedProducts => removeCheckedProducts.product_id !== item
        ))
    );
    setCheckedArr(removeCheckedProducts);
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
                  setProduct={setProduct}
                  key={product.product_id}
                  checkedArr={checkedArr}
                  idx={idx}
                  removeProduct={removeProduct}
                  removeChild={removeChild}
                  childCheckRemove={childCheckRemove}
                  setCheckedArr={setCheckedArr}
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
