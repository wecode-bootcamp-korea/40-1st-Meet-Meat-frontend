import React from 'react';
import Option from './components/Option';
import ProductDetail from './components/ProductDetail';
import './ProductPage.scss';

const ProductPage = () => {
  return (
    <div class="product-page">
      <Option />
      <ProductDetail />
    </div>
  );
};

export default ProductPage;
