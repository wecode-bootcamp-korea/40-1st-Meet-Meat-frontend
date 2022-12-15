import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Plus from '../../assets/OrderPage/plus.png';
import Sign from '../../assets/OrderPage/sign.png';
import './OrderPage.scss';

const OrderPage = () => {
  const [userData, setUserData] = useState({});
  const [basketData, setBasketData] = useState([]);

  useEffect(() => {
    fetch('data/basket.json', {
      headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setBasketData(result.basketList));
  }, []);

  useEffect(() => {
    fetch('data/UserInfo.json', {
      headers: {
        'content-type': 'application/json;charset=utf-8',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => setUserData(result));
  }, []);

  const paymentButton = () => {
    alert(`결제가 완료되었습니다. 남은포인트는 ${userData.point}`);
  };

  return (
    <div className="order-page">
      <h1 className="order">주문하기</h1>
      <div className="sender-table">
        <h2 className="sender">보내시는 분</h2>
        <table className="order-information">
          <thead className="order-border">
            <tr>
              <th className="order-border order-color">이름</th>
              <th className="order-infor">{userData.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="order-border order-color">전화번호</td>
              <td className="order-infor">{userData.phoneNumber}</td>
            </tr>
            <tr className="order-border">
              <td className="order-border order-color">이메일</td>
              <td className="order-infor">{userData.email}</td>
            </tr>
          </tbody>
        </table>
        <div className="order-padding" />
        <div className="order-address">
          <h3 className="sender">받으시는 분</h3>
        </div>
        <table className="order-information">
          <thead className="order-border">
            <tr>
              <th className="order-border order-color">이름</th>
              <th className="order-infor">{userData.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="order-border order-color">전화번호</td>
              <td className="order-infor">{userData.phoneNumber}</td>
            </tr>
            <tr className="order-border">
              <td className="order-border order-color">주소</td>
              <td className="order-infor">{userData.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="order-product-table">
        <h4 className="order-product">주문 상품</h4>
        <div className="order-product-list">
          {basketData.map(basket => {
            return (
              <div className="product-list" key={basket.id}>
                <p className="order-product-name">{basket.name}</p>
                <p className="order-product-gram">300g기준</p>
                <p className="order-product-count">0팩</p>
                <p className="order-product-price">{basket.price}원</p>
              </div>
            );
          })}
          <div className="order-product-last">
            <div>
              <p className="all-product-name">총 상품 금액</p>
              <p className="all-product-price">0000원</p>
            </div>
            <img src={Plus} alt="더하기" />
            <div>
              <p className="all-product-name">배송비</p>
              <p className="all-product-price">0000원</p>
            </div>
            <img src={Sign} alt="부등호" />
            <div>
              <p className="all-product-name">예상 결제 금액</p>
              <p className="all-product-price red">0000원</p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-button">
        <button className="button-befor">이전으로</button>
        <Link to="./main">
          <button className="button-go" onClick={paymentButton}>
            결제하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
