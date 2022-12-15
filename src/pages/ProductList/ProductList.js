import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Banner from './Section/Banner/Banner';
import ProductCategory from './Section/Category/ProductCategory/ProductCategory';
import ProductMeatList from './Section/ProductMeatList/ProductMeatList';
import './ProductList.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); // 얘야 우리가 한 번이 되어야 집에 가거든?
  const [searchParams, setSearchParams] = useSearchParams();

  const changeCategory = pageId => {
    searchParams.set('categories', pageId);
    setSearchParams(searchParams);
  };

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
  console.log(products);
  // console.log(categoryId);
  // console.log(products);
  // console.log(`http://10.58.52.62:8000/products/name/:${categoryId}`);
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
