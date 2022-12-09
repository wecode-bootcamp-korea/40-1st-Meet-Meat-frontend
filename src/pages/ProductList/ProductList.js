import React from 'react';
import Banner from './Section/Banner/Banner';
import ProductCategory from './Section/Category/ProductCategory';
import ProductMeatList from './Section/ProductMeatList/ProductMeatList';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="productList">
      <Banner />
      <ProductCategory />
      <ProductMeatList />
    </div>
  );
};

export default ProductList;
