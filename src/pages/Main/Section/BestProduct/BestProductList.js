import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const BestProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./data/meatInfoList.json', {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setProducts(result.meatList);
      });
  }, []);

  return products.map(meatList => {
    return <ProductCard key={meatList.meatId} meatList={meatList} />;
  });
};

export default BestProductList;
