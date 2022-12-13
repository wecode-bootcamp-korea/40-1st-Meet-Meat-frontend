import React from 'react';
import './FilterCategory.scss';

const FilterCategory = () => {
  return (
    <div className="selectCategory">
      <ul className="selectProductCategory">
        <li className="productCategoryListNone">추천순</li>
        <li className="productCategoryList">신상품순</li>
        <li className="productCategoryList">낮은 가격순</li>
        <li className="productCategoryList">높은 가격순</li>
      </ul>
    </div>
  );
};

export default FilterCategory;
