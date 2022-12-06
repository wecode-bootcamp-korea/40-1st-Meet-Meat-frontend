import React, { useEffect, useState } from 'react';
import BestProductList from './BestProductList';
const BestProduct = ({}) => {
  return (
    <>
      <div className="BestProductTitle">정육각 베스트 상품</div>
      <div className="BestProduct">
        <ul className="BestProductList">
          <BestProductList />
        </ul>
      </div>
    </>
  );
};

export default BestProduct;
