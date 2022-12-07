import React from 'react';
import search from '../../assets/DeliveryPage/search.png';
import Today from '../../assets/DeliveryPage/today.png';
import Dinner from '../../assets/DeliveryPage/dinner.png';
import Delivery from '../../assets/DeliveryPage/delivery.png';
import Sale from '../../assets/DeliveryPage/sale.png';
import Coupon from '../../assets/DeliveryPage/coupon.png';
import Black from '../../assets/DeliveryPage/black.jpeg';
import Fast from '../../assets/DeliveryPage/fast.png';
import Truck from '../../assets/DeliveryPage/truck.png';
import Map from '../../assets/DeliveryPage/map.png';
import './DeliveryPage.scss';

const DeliveryPage = () => {
  return (
    <div className="delivery-page">
      <div className="delivery-main">
        <div>
          <h1 className="main">초신선배송</h1>
          <span className="main2">정육각의 초신선함을 식탁까지 온전하게</span>
        </div>
        <img className="fast-logo" src={Fast} alt="fast"></img>
      </div>
      <h3 className="delivery-why">왜 정육각 초신선배송인가요?</h3>
      <div className="delivery-main2">
        <div className="delivery-content">
          <div className="content-box">
            <img
              className="delivery-image"
              src={Truck}
              alt="delivery-image"
            ></img>
            <span className="content-write">빠른 배송</span>
            <span className="content-write2">
              아침에 낳은 달걀을 저녁에 받아보실 수 있도록 최대한 빠르게
              배송합니다
            </span>
          </div>
          <div className="content-box">
            <img
              className="delivery-image"
              src={Black}
              alt="delivery-image"
            ></img>
            <span className="content-write">안전하고 신선한 포장</span>
            <span className="content-write2">
              수차례 배송테스트를 거친 간소한 포장으로 신선도를 유지하면서도
              안전하게 배송합니다.
            </span>
          </div>
          <div className="content-box">
            <img
              className="delivery-image"
              src={Map}
              alt="delivery-image"
            ></img>
            <span className="content-write">다양한 지역으로의 확장</span>
            <span className="content-write2">
              초신선 상품을 더 많은 분들과 함께하기 위해 당일배송,
              새벽배송지역을 계속 넓힙니다.
            </span>
          </div>
        </div>
      </div>
      <div className="delivery-check">
        <h3 className="delivery-check2">
          우리집에 어떤 초신선배송이 오는지 <br />
          지금 확인하세요
        </h3>
        <div className="delivery-search">
          <input
            className="delivery-input"
            type="text"
            placeholder="배송 지역 검색"
          ></input>
          <button className="delivery-button">
            <img className="search-logo" src={search} alt="search"></img>
          </button>
        </div>
      </div>
      <div className="delivery-service">
        <ul className="delivery-select">
          <img src={Today} alt="today"></img>
          <li>당일배송</li>
          <img src={Dinner} alt="dinner"></img>
          <li>새벽배송</li>
          <img src={Delivery} alt="delivery"></img>
          <li>택배배송</li>
        </ul>
      </div>
      <div className="delivery-advertisement">
        <div className="advertisement-right">
          <h5 className="advertisement-write">
            신선할인으로 더 담을수록,
            <br />더 적어지는 배송비
            <img className="sale" src={Sale} alt="할인"></img>
          </h5>
          <p className="advertisement-write2">
            삼겹살, 돈까스, 오징어 등 뭐든지 2개만 담아도 배송비
            <br /> 배송비 할인! <span>5개 담으면 배송비 무료!</span>
          </p>
        </div>
        <div className="advertisement-left">
          <h5 className="advertisement-write">
            정육각 초신선배송,
            <br />
            부담없이 이용하려면?
            <img className="coupon" src={Coupon} alt="쿠폰"></img>
          </h5>
          <p className="advertisement-write2">한번 배송비로 4회 무료배송!</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
