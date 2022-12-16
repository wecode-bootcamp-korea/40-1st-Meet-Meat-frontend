import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Banner from './Section/Banner/Banner';
import ProductCategory from './Section/Category/ProductCategory/ProductCategory';
import ProductMeatList from './Section/ProductMeatList/ProductMeatList';
import './ProductList.scss';

const ProductList = () => {
  const [productAll, setProductAll] = useState([]);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const changeCategory = pageId => {
    searchParams.set('categories', pageId);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    fetch(`http://10.58.52.55:8000/products/name/${categoryId}`, {
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

  useEffect(() => {
    fetch(`http://10.58.52.55:8000/products`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setProductsall(data);
      });
  }, []);
  return (
    <div className="productList">
      <Banner />

      <ProductCategory
        categoryId={categoryId}
        changeCategory={changeCategory}
        data={products}
      />

      <ProductMeatList data={products} />
    </div>
  );
};

export default ProductList;
