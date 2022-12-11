import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { PRODUCTSORTS } from './data/PRODUCTSORTS.js';
import FilterCategory from './FilterCategory/FilterCategory';
import './ProductCategory.scss';

const ProductCategory = () => {
  const PRODUCTSORTS = [
    { id: 1, name: '전체', Link: '/product-page' },
    { id: 2, name: '돼지', Link: '/product-page' },
    { id: 3, name: '소', Link: '/product-page' },
    { id: 4, name: '닭', Link: '/product-page' },
    { id: 5, name: '오리', Link: '/product-page' },
  ];

  const [categoryId, setCategoryId] = useState();
  return (
    <>
      <ul className="productListTab">
        {PRODUCTSORTS.map(({ id, name, link }) => {
          return (
            <li
              className="productCategory"
              key={id}
              onMouseEnter={() => setCategoryId(id)}
              onMouseLeave={() => setCategoryId()}
            >
              <div key={id} onClick={link}>
                {name}
              </div>
            </li>
          );
        })}
      </ul>
      <FilterCategory />
    </>
  );
};

export default ProductCategory;
