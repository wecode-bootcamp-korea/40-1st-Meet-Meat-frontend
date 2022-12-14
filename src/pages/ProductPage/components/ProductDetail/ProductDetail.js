import React from 'react';
import Check from '../../../../assets/ProductPage/check.png';
import './ProductDetail.scss';

const ProductDetail = ({ productInformation }) => {
  const {
    name,
    bannerImg,
    dateMonth,
    dateDay,
    informationImg1,
    informationImg2,
    informationImg3,
  } = productInformation;

  return (
    <div className="product-page2">
      <h1 className="product-topic">왜 고기잇인가요?</h1>
      <p className="product-subtitle">
        <span className="product-subtitle2">
          잡은지 4일 이내의 초신선 삼겹살
        </span>
        은 오직 고기잇에서만 맛볼 수 있기 때문입니다.
      </p>
      <img className="product-image" src={bannerImg} alt={name} />
      <div className="product-date">
        <p className="product-date-check">
          내일 받으실 삼겹살의 도축일을 확인하세요.
        </p>
        <div className="product-date-area">
          <div className="date-box">
            <span className="product-date-number">{dateMonth} 월</span>
            <span className="product-date-number">{dateDay} 일</span>
          </div>
        </div>
        <div className="product-comment">*당일배송 기준</div>
      </div>
      <div className="product-different">
        <div className="product-different-why">
          지금 주문하시고 초신선 돼지고기 맛의 차이를 직접 경험해보세요.
        </div>
        <img
          className="product-different-image"
          src={informationImg1}
          alt="상품"
        />
        <img
          className="product-different-image"
          src={informationImg2}
          alt="상품"
        />
        <img
          className="product-different-image"
          src={informationImg3}
          alt="상품"
        />
      </div>
      <div className="product-certification">
        <p className="certification-check">인증 정보를 확인하세요.</p>
        <div className="certification-flex">
          <img className="certification-image" src={Check} alt="check" />
          <div className="certification-box">
            <p className="haccp">HACCP</p>
            <div className="certification-write">
              돼지가 자라나는 농장부터 정육각의 생산장까지
              <br /> 전 과정HACCP 인증을 통해 깨끗하고 안전한 상품을 <br />
              생산하고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
