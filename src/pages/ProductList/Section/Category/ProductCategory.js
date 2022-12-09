import React from 'react';
import FilterCategory from './FilterCategory/FilterCategory';
import './ProductCategory.scss';

const ProductCategory = () => {
  return (
    <>
      <ul className="productListTab">
        <li className="productCategory">
          <div>돼지</div>
        </li>
        <li className="productCategory">
          <div>소</div>
        </li>
        <li className="productCategory">
          <div>닭</div>
        </li>
        <li className="productCategory">
          <div>오리</div>
        </li>
      </ul>
      <FilterCategory />
    </>
  );
};

export default ProductCategory;
