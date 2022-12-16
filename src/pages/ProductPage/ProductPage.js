import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Option from './components/Option/Option';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Arrow from '../../assets/ProductPage/arrow.png';
import './ProductPage.scss';

const ProductPage = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productInformation, setProductInformation] = useState({});

  const { productId } = useParams();

  const navigate = useNavigate();
  const goToReview = () => navigate('/review-page');

  // TODO: 상세페이지 api 완성 후, api uri 수정해야함.
  useEffect(() => {
    fetch(`http://10.58.52.62:8000/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductDetail(data);
      });
  }, [productId]);

  useEffect(() => {
    fetch('/data/productInformation1.json', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProductInformation(data);
      });
  }, []);

  return (
    <div className="product-page">
      <Option productDetail={productDetail} />
      <div className="tapSpace">
        <span className="tapWord" onClick={goToReview}>
          상품 리뷰 페이지로 이동
          <img className="arrowImg" src={Arrow} alt="화살표" />
        </span>
      </div>
      <ProductDetail productInformation={productInformation} />
    </div>
  );
};

export default ProductPage;
