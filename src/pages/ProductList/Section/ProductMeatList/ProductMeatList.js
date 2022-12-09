import React, { useState, useEffect } from 'react';
import ProductListCard from './ProductListCard/ProductListCard';

const ProductMeatList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/meatInfoList.json', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setProducts(result.meatList);
      });
  }, []);
  return (
    <div className="productListData">
      <ul className="productListDataSquare">
        {products.map(meatList => {
          return <ProductListCard key={meatList.meatId} meatList={meatList} />;
        })}
      </ul>
    </div>
  );
};

export default ProductMeatList;
