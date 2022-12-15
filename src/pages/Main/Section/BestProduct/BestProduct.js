import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './BestProduct.scss';

const BestProduct = () => {
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
    <>
      <div className="bestProductTitle">고기잇 베스트 상품</div>
      <div className="bestProduct">
        <ul className="bestProductList">
          {products.map(meatList => {
            return <ProductCard key={meatList.meatId} meatList={meatList} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default BestProduct;
