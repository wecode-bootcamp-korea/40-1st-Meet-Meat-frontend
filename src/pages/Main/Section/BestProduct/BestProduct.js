import React from 'react';
import BestProductList from './BestProductList';
import './BestProduct.scss';

const BestProduct = () => {
  return (
    <>
      <div className="bestProductTitle">정육각 베스트 상품</div>
      <div className="bestProduct">
        <ul className="bestProductList">
          <BestProductList />
        </ul>
      </div>
    </>
  );
};

export default BestProduct;
