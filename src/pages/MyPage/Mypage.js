import React from 'react';
import './Mypage.scss';

const Mypage = () => {
  return (
    <div className="myPage">
      <div className="myPageContainer">
        <p className="myPageContainerTitle">마이페이지</p>
        <div className="myPageUserInfoContainer">
          <img
            className="myPageUserInfoDataImage"
            src="https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
            alt="메달이미지"
          />
          <div className="myPageUserInfoData">
            <div className="myPageUserInfoDataTop">
              <div className="myPageUserInfoDataTopBtn">
                <p className="myPageUserInfoDataTopUserName">
                  Hello, <span>김윤아</span>님
                </p>

                <button className="myPageUserInfoDataTopLogOutBtn">
                  로그아웃
                </button>
              </div>
              <button className="myPageUserInfoDataTopQuestionBtn">
                내 질문 보기
              </button>
            </div>

            <div className="myPageUserInfoSplit" />
            <div>
              <ul className="myPageUserInfoBottom">
                <li className="myPageUserInfoBottomList">
                  <p className="myPageUserInfoBottomListTitle">회원등급</p>
                  <p className="myPageUserInfoBottomListCheck">[웰컴]</p>
                </li>
                <li className="myPageUserInfoBottomList">
                  <p className="myPageUserInfoBottomListTitle">적립금</p>
                  <p className="myPageUserInfoBottomListCheck">[0원]</p>
                </li>
                <li className="myPageUserInfoBottomList">
                  <p className="myPageUserInfoBottomListTitle">쿠폰</p>
                  <p className="myPageUserInfoBottomListCheck">[0개]</p>
                </li>
                <li className="myPageUserInfoBottomList">
                  <p className="myPageUserInfoBottomListTitle">구매</p>
                  <p className="myPageUserInfoBottomListCheck">[0건]</p>
                </li>
                <li className="myPageUserInfoBottomList">
                  <p className="myPageUserInfoBottomListTitle">회원번호</p>
                  <p className="myPageUserInfoBottomListCheck">
                    [1234-5678-9012]
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="myPageOrderTabContainer">
          <span className="myPageTab">주문내역</span>

          <div className="myPageOrderSplit" />
          <div>
            <div className="myPageOrderNone">
              <span className="myPageOrderNoneTitle">
                주문 내역이 없습니다.
              </span>
            </div>
            <button className="myPageOrderGoShoppingBtn">쇼핑하러가기</button>
          </div>
        </div>
        <div className="myPageOrderSplit2" />
      </div>
    </div>
  );
};

export default Mypage;
