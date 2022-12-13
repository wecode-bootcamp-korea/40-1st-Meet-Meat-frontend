import React, { useEffect, useState } from 'react';
import Option from './components/Option';
import ProductDetail from './components/ProductDetail';
import './ProductPage.scss';

const ProductPage = () => {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    fetch(`data/productDetail1.json`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setProductDetail(data);
      });
  }, []);
  return (
    <div class="product-page">
      <Option data={productDetail} />
      <ProductDetail />
    </div>
  );
};

export default ProductPage;
