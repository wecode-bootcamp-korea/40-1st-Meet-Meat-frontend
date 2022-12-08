import React from 'react';
import './Mypage.scss';

const Mypage = () => {
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
          <div className="userInfoData">
            <div className="userInfoDataTop">
              <div className="userInfoDataTopBtn">
                <p className="userInfoDataTopUserName">
                  Hello, <span>김윤아</span>님
                </p>

                <button className="userInfoDataTopLogOutBtn">로그아웃</button>
              </div>
              <button className="userInfoDataTopQuestionBtn">
                내 질문 보기
              </button>
            </div>

            <div className="userInfoSplit" />
            <div>
              <ul className="userInfoBottom">
                <li className="userInfoBottomList">
                  <p className="userInfoBottomListTitle">회원등급</p>
                  <p className="userInfoBottomListCheck">[웰컴]</p>
                </li>
                <li className="userInfoBottomList">
                  <p className="userInfoBottomListTitle">적립금</p>
                  <p className="userInfoBottomListCheck">[0원]</p>
                </li>
                <li className="userInfoBottomList">
                  <p className="userInfoBottomListTitle">쿠폰</p>
                  <p className="userInfoBottomListCheck">[0개]</p>
                </li>
                <li className="userInfoBottomList">
                  <p className="userInfoBottomListTitle">구매</p>
                  <p className="userInfoBottomListCheck">[0건]</p>
                </li>
                <li className="userInfoBottomList">
                  <p className="userInfoBottomListTitle">회원번호</p>
                  <p className="userInfoBottomListCheck">[1234-5678-9012]</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="orderTabContainer">
          <span className="myPageTab">주문내역</span>

          <div className="orderSplit" />
          <div>
            <div className="orderNone">
              <span className="orderNoneTitle">주문 내역이 없습니다.</span>
            </div>
            <button className="orderGoShoppingBtn">
              {' '}
              <img
                className="orderGoShoppingBtnImage"
                src="/images/myPage/제목_없는_아트워크.png"
                alt="버튼안화살표"
              />
              쇼핑하러가기
            </button>
          </div>
        </div>
        <div className="orderSplit2" />
      </div>
    </div>
  );
};

export default Mypage;
