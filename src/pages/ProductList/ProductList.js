import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from './Section/Banner/Banner';
import ProductCategory from './Section/Category/ProductCategory/ProductCategory';
import ProductMeatList from './Section/ProductMeatList/ProductMeatList';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // fetch(`http://10.58.52.62:3000/products/${categoryId}/list`) //`name=${name}`
    fetch(`http://10.58.52.62:8000/products/name/${categoryId}`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, [categoryId]);

  return (
    <div className="productList">
      <Banner />

      <ProductCategory categoryId={categoryId} data={products} />

      <ProductMeatList data={products} />
    </div>
  );
};

export default ProductList;
