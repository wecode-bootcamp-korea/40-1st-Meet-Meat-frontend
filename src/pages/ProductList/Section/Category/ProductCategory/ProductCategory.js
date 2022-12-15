import React from 'react';
import FilterCategory from '../FilterCategory/FilterCategory';
import { PRODUCTSORTS } from './PRODUCTSORTS';
import './ProductCategory.scss';

const ProductCategory = ({ categoryId, changeCategory, products }) => {
  return (
    <>
      <ul className="productListTab">
        {PRODUCTSORTS.map(sort => {
          return (
            <li
              key={sort.id}
              className={`productCategory ${
                sort.id === categoryId && 'productCategoryActive'
              }`}
              onClick={() => {
                changeCategory(sort.id);
              }}
            >
              <div>{sort.text}</div>
            </li>
          );
        })}
      </ul>
      <FilterCategory data={products} />
    </>
  );
};

export default ProductCategory;
