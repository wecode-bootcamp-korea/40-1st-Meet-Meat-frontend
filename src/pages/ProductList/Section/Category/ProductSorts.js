import React from 'react';

const ProductSorts = props => {
  const { categoryId, categoryName, changeCategory } = props;

  return (
    <li className="productCategory" id={categoryId} onClick={changeCategory}>
      <div>{categoryName}</div>
    </li>
  );
};

export default ProductSorts;
