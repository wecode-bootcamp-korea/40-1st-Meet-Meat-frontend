import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketListCard from './BasketListCard/BasketListCard';
import ReceiptSection from '../ReceiptSection/ReceiptSection';
import './BasketList.scss';

const BasketList = () => {
  const [basketProduct, setBasketProduct] = useState([]);
  const [checkedProduct, setCheckedProduct] = useState([]);
  const navigate = useNavigate();

  console.log('장바구니에 넣은 상품:', basketProduct);
  console.log('선택한 상품:', checkedProduct);
  console.log(basketProduct.price);

  const totalPrice =
    parseInt(basketProduct.price) * parseInt(basketProduct.total_quantity);

  // const isAllChecked =
  //   checkedProduct.length !== 0 &&
  //   basketProduct.length === checkedProduct.length;

  const handleSingleCheck = id => {
    if (checkedProduct.includes(id)) {
      setCheckedProduct(checkedProduct.filter(el => el !== id));
    } else {
      setCheckedProduct(checkedProduct.concat(id));
    }
  };

  // const handleAllCheck = () => {
  //   if (isAllChecked) {
  //     setCheckedProduct([]);
  //   } else {
  //     setCheckedProduct(basketProduct.map(({ id }) => id));
  //   }
  // };

  const onChangeProps = (id, key, value) => {
    setBasketProduct(prevItem => {
      return prevItem.map(obj => {
        if (obj.option_products_id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  /*
  //PATCH
  const patchAmount = async (optionProductsId, quantity) => {
    const response = await fetch(
      `/data/basketList.json/patch?optionProductsId=${optionProductsId}&quantity=${quantity}`,
      //`<주소>${optionProductsId}&quantity=${total_quantity}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    );

    const data = await response.json();
    if (data) {
      const response = await fetch(`${API.CART}/user`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      const patchedItem = data.getCartbyId
        .map(obj => {
          return {
            id: obj.id,
            option_products_id: obj.option_products_id,
            name: obj.name,
            price: +obj.price,
            quantity: +obj.quantity,
            tumbnail_url: obj.tumbnail_url,
            standard_unit: obj.standard_unit,
            thick: obj.thick,
          };
        })
        .filter(obj => {
          return obj.option_products_id === optionProductsId;
        });
      setBasketProduct(prevState => {
        return prevState.map(obj => {
          if (obj.option_products_id === optionProductsId) {
            return patchedItem[0];
          } else {
            return obj;
          }
        });
      });
    }
  };

  //DELETE
  const deleteProduct = async () => {
    const response = await fetch(
      `${API.CART}/delete?cartsId=${checkedItem.join('&cartsId=')}`,
      // `http://172.20.10.3:3000/carts/delete?cartsId=${checkedItem.join(
      //   '&cartsId='
      // )}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
      }
    );

    const data = await response.json();

    if (data) {
      const response = await fetch(`${API.CART}/user`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });

      const data = await response.json();
      const filteredList = data.getCartbyId
        .filter(el => {
          return !checkedItem.includes(el.id);
        })
        .map(obj => {
          return {
            id: obj.id,
            option_products_id: obj.option_products_id,
            name: obj.name,
            price: obj.price,
            quantity: obj.quantity,
            tumbnail_url: obj.tumbnail_url,
            standard_unit: obj.standard_unit,
            thick: obj.thick,
          };
        });
      setCartItem(filteredList);
    }
  }; */

  // GET;
  const getCartData = () => {
    fetch(`/data/basketList.json`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setBasketProduct(data.basketList));
  };

  useEffect(() => {
    getCartData();
  }, []);

  // useEffect(() => {
  //   fetch('/data/basketList.json', { method: 'GET' })
  //     .then(response => response.json())
  //     .then(result => {
  //       setBasketProduct(result.basketList);
  //     });
  // });
  return (
    <div className="basket">
      <div className="basket-table">
        <div className="basket-info">상품정보</div>
        <div className="basket-num">수량</div>
        <div className="basket-price">가격</div>
      </div>
      <ul className="basket-item">
        {basketProduct.map(data => {
          return (
            <BasketListCard
              key={data.id}
              productInfo={data}
              onChangeProps={onChangeProps}
              checkedItem={checkedProduct}
              handleSingleCheck={() => handleSingleCheck(data.id)}
              setCartItem={setBasketProduct}
              totalPrice={totalPrice}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BasketList;
