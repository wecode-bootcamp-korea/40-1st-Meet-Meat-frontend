import React from 'react';
import ProductListCard from './ProductListCard/ProductListCard';

const ProductMeatList = ({ data }) => {
  return (
    <div className="productListData">
      <ul className="productListDataSquare">
        {data.map(meat => {
          return <ProductListCard key={meat.meatId} meat={meat} />;
        })}
      </ul>
    </div>
  );
};

export default ProductMeatList;
