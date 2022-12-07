import React from 'react';
import './ProductPage.scss';
import ProductPage1 from '../../components/ProductPage/ProductPage1';
import ProductPage2 from '../../components/ProductPage/ProductPage2';

const ProductPage = () => {
  return (
    <div class="product-page">
      <ProductPage1 />
      <ProductPage2 />
    </div>
  );
};

export default ProductPage;
