import React from 'react';
import ProductListCard from './ProductListCard/ProductListCard';

const ProductMeatList = ({ data }) => {
  console.log(data);
  return (
    <div className="productListData">
      <ul className="productListDataSquare">
        {data.map(meat => {
          return <ProductListCard key={meat.Id} meat={meat} />;
        })}
      </ul>
    </div>
  );
};

export default ProductMeatList;
