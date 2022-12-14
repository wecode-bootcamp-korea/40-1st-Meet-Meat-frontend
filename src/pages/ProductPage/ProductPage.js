import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Option from './components/Option';
import ProductDetail from './components/ProductDetail';
import './ProductPage.scss';

const ProductPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(1);
  console.log(productDetail);
  console.log(productDetail.price);
  console.log(count);
  console.log(price);

  const params = useParams();
  const productId = params.id;

  const navigate = useNavigate();
  const goToReview = () => navigate('/review-page');

  const decreaseCount = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
      setPrice(Number(productDetail.price) * (count - 1));
    }
  };

  const increaseCount = () => {
    setCount(prev => prev + 1);
    setPrice(Number(productDetail.price) * (count + 1));
  };

  useEffect(() => {
    fetch(`data/productDetail1.json`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setProductDetail(data);
      });
  }, [productId]);

  return (
    <div class="product-page">
      <Option
        data={productDetail}
        decreaseCount={decreaseCount}
        increaseCount={increaseCount}
        productQuantity={count}
      />
      <div className="tapSpace">
        <span className="tapWord" onClick={goToReview}>
          상품 리뷰 페이지로 이동
          <img className="arrowImg" src="images/ProductDetail/arrow.png" />
        </span>
      </div>
      <ProductDetail />
    </div>
  );
};

export default ProductPage;
