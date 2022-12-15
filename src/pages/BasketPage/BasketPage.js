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

  const checkedDeleteHandler = () => {
    checkedProduct.forEach(item => {
      return fetch('data/basketList.json', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('Token'),
        },
      });
    });
  };

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
    let newProductArray = [...product];
    let newCheckedArray = [...checkedProduct];
    newProductArray[idx].amount = newAmount;
    newCheckedArray[idx].amount = newAmount;
    setCheckedProduct(newCheckedArray);
    setProduct(newProductArray);
    setCountProduct(newCheckedArray);
  };

  const removeProduct = id => {
    setProduct(
      product.basketList.filter(product => {
        return product.products_id !== id;
      })
    );
    setCheckedProduct(
      checkedProduct.filter(check => {
        return check.products_id !== id;
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
            return check.products_id !== productDetail.product_id;
          })
        );
  };

  const removeChild = id => {
    let removeProducts;
    id.forEach(
      item =>
        (removeProducts = product.basketList.filter(
          product => product.products_id !== item
        ))
    );
    id.forEach(
      item =>
        (removeProducts = removeProducts.filter(
          removeProducts => removeProducts.products_id !== item
        ))
    );
    setProduct(removeProducts);

    let removeCheckedProducts;
    id.forEach(
      item =>
        (removeCheckedProducts = product.basketList.filter(
          product => product.products_id !== item
        ))
    );
    id.forEach(
      item =>
        (removeCheckedProducts = removeCheckedProducts.filter(
          removeCheckedProducts => removeCheckedProducts.products_id !== item
        ))
    );
    setCheckedProduct(removeCheckedProducts);
  };

  const checkedId = checkedProduct.map(item => {
    return item.products_id;
  });

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
          <button
            onClick={() => {
              removeChild(checkedId);
              checkedDeleteHandler();
            }}
          >
            x
          </button>
          <ul className="basket-item">
            {product.basketList &&
              product.basketList.map((product, idx) => (
                <BasketListCard
                  product={product}
                  setProduct={setProduct}
                  key={product.product_id}
                  checkedProduct={checkedProduct}
                  idx={idx}
                  removeProduct={removeProduct}
                  removeChild={removeChild}
                  childCheckRemove={childCheckRemove}
                  setCheckedProduct={setCheckedProduct}
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
