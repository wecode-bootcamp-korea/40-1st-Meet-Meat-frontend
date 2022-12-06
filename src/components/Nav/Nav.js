import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <header>
      <div className="navContainer">
        <div className="navMain">
          <img
            className="navMeatImage"
            src="https://cdn-icons-png.flaticon.com/512/1826/1826259.png"
            alt="메인 고기 아이콘
            "
          />
          <p className="navMainName">고기각</p>
          <ul className="navMainMenu">
            <li className="navMainMenuList">쇼핑하기</li>
            <li className="navMainMenuList">배송안내</li>
            <li className="navMainMenuList">이벤트</li>
          </ul>
        </div>
        <div className="navRight">
          <div className="navRightSubMenu">
            <ul className="navRightSubMenuList">
              <li className="navRightSubList">공지사항</li>
              <li className="navRightSubList">고객센터</li>
            </ul>
            <span className="navRightSubMenuSplit">|</span>
            <ul className="navRightSubMenuList">
              <li className="navRightSubList"> 로그인</li>
              <li className="navRightSubList">회원가입</li>
            </ul>
          </div>

          <div className="navSideIcon">
            <img
              className="navRightCartIcon"
              src="https://cdn-icons-png.flaticon.com/512/7756/7756009.png"
              alt="카트이미지"
            />
            <img
              className="navRightSideIcon"
              src="https://cdn-icons-png.flaticon.com/512/5135/5135168.png"
              alt="더보기 아이콘"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
