import React from 'react';
import FilterCategory from './FilterCategory/FilterCategory';
import ProductSorts from '../ProductSorts';
import './ProductCategory.scss';

const ProductCategory = ({ changeCategory, categoryId, handleTab }) => {
  const PRODUCTS_SORTS = [
    { id: 1, text: '전체', name: 'all' },
    { id: 2, text: '바보', name: 'pork' },
    { id: 3, text: '소', name: 'beef' },
    { id: 4, text: '닭', name: 'chicken' },
    { id: 5, text: '오리', name: 'duck' },
  ];

  return (
    <>
      <ul className="productListTab">
        {PRODUCTS_SORTS.map(tab => {
          return (
            <li
              className={`productCategory ${
                tab.id === categoryId && 'productCategoryActive'
              }`}
              onClick={() => {
                handleTab(tab.id);
              }}
            >
              <div>{tab.text}</div>
            </li>
          );
        })}
      </ul>
      <FilterCategory />
    </>
  );
};

export default ProductCategory;
