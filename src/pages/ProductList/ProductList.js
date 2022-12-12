import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Banner from './Section/Banner/Banner';
import ProductCategory from './Section/Category/ProductCategory/ProductCategory';
import ProductMeatList from './Section/ProductMeatList/ProductMeatList';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTab = pageId => {
    searchParams.set('categories', pageId);
    setSearchParams(searchParams);
    setCategoryId(pageId);
  };

  useEffect(() => {
    //fetch(`http://10.58.52.125:3000/products/${categoryId}`)
    fetch(`data/meatInfoList.json`, {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data.meatList);
      });
  }, [categoryId]);

  return (
    <div className="productList">
      <Banner />
      <ProductCategory
        changeCategory={handleTab}
        categoryId={categoryId}
        handleTab={handleTab}
      />
      <ProductMeatList data={products} />
    </div>
  );
};

export default ProductList;
