import React from 'react';
import FilterCategory from '../FilterCategory/FilterCategory';
import './ProductCategory.scss';

const ProductCategory = ({ categoryId, changeCategory, products }) => {
  const PRODUCTS_SORTS = [
    { id: 1, text: '전체', name: 'all' },
    { id: 2, text: '돼지', name: 'pork' },
    { id: 3, text: '소', name: 'beef' },
    { id: 4, text: '닭', name: 'chicken' },
    { id: 5, text: '오리', name: 'duck' },
  ];

  return (
    <>
      <ul className="productListTab">
        {PRODUCTS_SORTS.map(sort => {
          return (
            <li
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
