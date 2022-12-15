import React from 'react';
import { Link } from 'react-router-dom';
import FilterCategory from '../FilterCategory/FilterCategory';
import { PRODUCTSORTS } from './PRODUCTSORTS';
import './ProductCategory.scss';

const ProductCategory = ({ categoryId, products }) => {
  return (
    <>
      <ul className="productListTab">
        {PRODUCTSORTS.map(sort => {
          return (
            <Link
              className="productCategoryLink"
              to={`/product-list/${sort.name}`}
              key={sort.id}
            >
              <li
                className={`productCategory ${
                  sort.name === categoryId && 'productCategoryActive'
                }`}
              >
                {sort.text}
              </li>
            </Link>
          );
        })}
      </ul>

      <FilterCategory data={products} />
    </>
  );
};

export default ProductCategory;
