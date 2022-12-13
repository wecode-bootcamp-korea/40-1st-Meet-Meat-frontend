import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/meatInfoList.json', { method: 'GET' })
      .then(response => response.json())
      .then(result => {
        setProducts(result.meatList);
      });
  });
  return products.map(product => {
    return (
      <li>
        <div className="ProductItem">
          <img src={product.meatImage} alt="meat" className="productImage" />
        </div>
        <div className="productInformation">
          {product.meatName}
          <span className="productPriceInformation">{product.meatPrice}</span>
        </div>
      </li>
    );
  });
};

export default ProductList;
