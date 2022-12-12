import React, { useState } from 'react';
import Modal from '../../../src/components/Modal/Modal';
import Plus from '../../assets/OrderPage/plus.png';
import Sign from '../../assets/OrderPage/sign.png';
import './OrderPage.scss';

const OrderPage = () => {
  const [openAddress, setOpenAddress] = useState(false);

  const buttonClick = () => {
    setOpenAddress(true);
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
              <th className="order-infor">ㄱㅁㄱ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="order-border order-color">전화번호</td>
              <td className="order-infor">0000</td>
            </tr>
            <tr className="order-border">
              <td className="order-border order-color">이메일</td>
              <td className="order-infor">ㄱㅁㄱ</td>
            </tr>
          </tbody>
        </table>
        <div className="order-padding" />
        <div className="order-address">
          <h3 className="sender">받으시는 분</h3>
          <div>
            <button className="address-button" onClick={buttonClick}>
              주소선택
            </button>
            {openAddress && <Modal setOpenAddress={setOpenAddress} />}
          </div>
        </div>
        <table className="order-information">
          <thead className="order-border">
            <tr>
              <th className="order-border order-color">이름</th>
              <th className="order-infor">ㄱㅁㄱ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="order-border order-color">전화번호</td>
              <td className="order-infor">0000</td>
            </tr>
            <tr className="order-border">
              <td className="order-border order-color">주소</td>
              <td className="order-infor">ㄱㅁㄱ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="order-product-table">
        <h4 className="order-product">주문 상품</h4>
        <div className="order-product-list">
          <div className="product-list">
            <p className="order-product-name">초신선 닭볶음탕</p>
            <p className="order-product-gram">950g기준</p>
            <p className="order-product-count">0팩</p>
            <p className="order-product-price">0원</p>
          </div>
          <div className="product-list">
            <p className="order-product-name">
              [첫구매 무료] 초신선 돼지 삼겹살 구이용
            </p>
            <p className="order-product-gram">950g기준</p>
            <p className="order-product-count">0팩</p>
            <p className="order-product-price">0원</p>
          </div>
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
        <button className="button-go">주문하기</button>
      </div>
    </div>
  );
};

export default OrderPage;