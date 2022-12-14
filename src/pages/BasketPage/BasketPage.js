import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketList from './Section/BasketList/BasketList';
import ReceiptSection from './Section/ReceiptSection/ReceiptSection';
import './BasketPage.scss';

const BasketPage = () => {
  const [basketProduct, setBasketProduct] = useState([]);
  const [checkedProduct, setCheckedProduct] = useState([]);

  console.log(basketProduct);
  console.log(checkedProduct);

  const navigate = useNavigate();

  const moveOrder = () => {
    navigate('/order-page', { state: { cartId: checkedProduct } });
  };

  const onChangeProps = (id, key, value) => {
    setCheckedProduct(prev => {
      return prev.map(obj => {
        if (obj.option_products_id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  const handleSingleCheck = id => {
    if (checkedProduct.includes(id)) {
      setCheckedProduct(checkedProduct.filter(el => el !== id));
    } else {
      setCheckedProduct(checkedProduct.concat(id));
    }
  };

  /*
  //PATCH
  const patchAmount = async (optionProductsId, quantity) => {
    const response = await fetch(
      `/data/basketList.json`,
      //patch?optionProductsId=${optionProductsId}&quantity=${quantity},
      {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    );

    const data = await response.json();
    const patchedItem = data.getCartbyId
      .map(obj => {
        return {
          id: obj.id,
          option_products_id: obj.option_products_id,
          name: obj.name,
          price: +obj.price,
          quantity: +obj.quantity,
          img_url: obj.img_url,
          thickness: obj.thickness,
        };
      })
      .filter(obj => {
        return obj.option_products_id === optionProductsId;
      });
    setBasketProduct(prev => {
      return prev.map(obj => {
        if (obj.option_products_id === optionProductsId) {
          return patchedItem[0];
        } else {
          return obj;
        }
      });
    });
  };
};

//Delete
//DELETE
const deleteProduct = async () => {
  const response = await fetch(
    `/data/basketList.json`,
    //   '&cartsId='
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
    const response = await fetch(`/data/basketList.json`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });

    const data = await response.json();
    const filteredList = data.getCartbyId
      .filter(el => {
        return !checkedProduct.includes(el.id);
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
    setBasketProduct(filteredList);
  }

  */

  //GET
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

  return (
    <div className="basket-page">
      <div className="basket-name">장바구니</div>
      <div className="basket-flex">
        <ul>
          {basketProduct.map(data => (
            <BasketList
              key={data.id}
              productInfo={data}
              onChangeProps={onChangeProps}
              basketProduct={basketProduct}
              setBasketProduct={setBasketProduct}
              handleSingleCheck={handleSingleCheck}
              // patchAmount={patchAmount}
              // deleteProduct={deleteProduct}
            />
          ))}
        </ul>
        <ReceiptSection basketProduct={basketProduct} />
      </div>
    </div>
  );
};

export default BasketPage;
