import React, { useEffect, useState } from 'react';
import ProductListCard from './ProductListCard/ProductListCard';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/meatInfoList.json', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setProducts(result.meatList);
      });
  }, []);
  return (
    <div className="productList">
      <div className="productListBanner">
        <div className="productListPhrase">갓 잡은 돼지고기</div>
      </div>
      <div>
        <ul className="productListTab">
          <li className="productCategory">
            <div>돼지</div>
          </li>
          <li className="productCategory">
            <div>소</div>
          </li>
          <li className="productCategory">
            <div>닭</div>
          </li>
          <li className="productCategory">
            <div>오리</div>
          </li>
        </ul>
      </div>
      <div>
        <div className="selectCategory">
          <div className="allProducts">총 100건</div>
          <ul className="selectProductCategory">
            <li className="productCategoryList">추천순</li>
            <span className="categoryLine">|</span>
            <li className="productCategoryList">신상품순</li>
            <span className="categoryLine">|</span>
            <li className="productCategoryList">낮은 가격순</li>
            <span className="categoryLine">|</span>
            <li className="productCategoryList">높은 가격순</li>
          </ul>
        </div>
        <div className="productListData">
          <ul className="productListDataSquare">
            {products.map(meatList => {
              return (
                <ProductListCard key={meatList.meatId} meatList={meatList} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
