import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from './Section/Banner/Banner';
import ProductCategory from './Section/Category/ProductCategory/ProductCategory';
import ProductMeatList from './Section/ProductMeatList/ProductMeatList';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const apiPath = categoryId !== 'all' ? `/name/${categoryId}` : '';

  useEffect(() => {
    fetch(`http://10.58.52.55:8000/products${apiPath}`, {
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      });
  }, [apiPath]);

  return (
    <div className="productList">
      <Banner />

      <ProductCategory categoryId={categoryId} data={products} />

      <ProductMeatList data={products} />
    </div>
  );
};

export default ProductList;
