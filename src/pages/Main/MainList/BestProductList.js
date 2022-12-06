import React from 'react';

const BestProductList = () => {
  return (
    <>
      <div className="BestProductTitle">정육각 베스트 상품</div>
      <div className="BestProduct">
        <ul className="BestProductList">
          <li>
            <div className="BestProductItem">
              <img src="#" alt="meat1" />
            </div>
            <div className="productInformation">
              초신선 돼지 삼겹살 구이용
              <span className="productPriceInformation">
                기준가 21,300원/600g
              </span>
            </div>
          </li>
          <li>
            <div className="BestProductItem">
              <img src="#" alt="meat2" />
            </div>
            <div className="productInformation">
              초신선 닭볶음탕
              <span className="productPriceInformation">
                기준가 21,300원/600g
              </span>
            </div>
          </li>
          <li>
            <div className="BestProductItem">
              <img src="#" alt="meat3" />
            </div>
            <div className="productInformation">
              초신선 등심 돈까스
              <span className="productPriceInformation">
                기준가 21,300원/600g
              </span>
            </div>
          </li>
          <li>
            <div className="BestProductItem">
              <img src="#" alt="meat4" />
            </div>
            <div className="productInformation">
              초신선 무항생제 유정란
              <span className="productPriceInformation">
                기준가 21,300원/600g
              </span>
            </div>
          </li>
          <li>
            <div className="BestProductItem">
              <img src="#" alt="meat5" />
            </div>
            <div className="productInformation">
              초신선 무항생제 우유
              <span className="productPriceInformation">
                기준가 21,300원/600g
              </span>
            </div>
          </li>
          <li>
            <div className="BestProductItem">
              <img src="#" alt="meat6" />
            </div>
            <div className="productInformation">
              초신선 한우 우둔 다짐육
              <span className="productPriceInformation">
                기준가 21,300원/600g
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BestProductList;
