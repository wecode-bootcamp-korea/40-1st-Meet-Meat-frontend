import React, { useState, useEffect } from 'react';
import './Mypage.scss';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';

const Mypage = () => {
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    fetch('/data/userData.json', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setUserInformation(result);
      });
  }, []);

  return (
    <div className="myPage">
      <div className="myPageContainer">
        <p className="containerTitle">마이페이지</p>
        <div className="userInfoContainer">
          <img
            className="userInfoContainerImage"
            src="https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
            alt="메달이미지"
          />
          <UserInfo userData={userInformation} />
        </div>
        <div className="orderTabContainer">
          <span className="myPageTab">주문내역</span>

          <div className="orderSplit" />
          <div>
            <div className="orderNone">
              <span className="orderNoneTitle">주문 내역이 없습니다.</span>
            </div>
            <Link to="/product-list/all">
              <button className="orderGoShoppingBtn">
                <img
                  className="orderGoShoppingBtnImage"
                  src="/images/myPage/제목_없는_아트워크.png"
                  alt="버튼안화살표"
                />
                쇼핑하러가기
              </button>
            </Link>
          </div>
        </div>
        <div className="orderBottomSplit" />
      </div>
    </div>
  );
};

export default Mypage;
