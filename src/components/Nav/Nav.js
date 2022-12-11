import React from 'react';
import { useState } from 'react';
import Hambuger from './Hambuger';
import './Nav.scss';

const Nav = () => {
  const [hambuger, setHambuger] = useState(false);

  const openNav = () => {
    setHambuger(true);
  };
  return (
    <div className="header">
      <div className="navContainer">
        <div className="navMain">
          <img
            className="navMeatImage"
            src="/images/Nav/MeatIcon.png"
            alt="메인고기아이콘"
          />
          <p className="navMainName">고기잇</p>
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
              src="/images/Nav/BasketWhite.png"
              alt="카트이미지"
            />
            <img
              className="navRightSideIcon"
              src="/images/Nav/MenuBarWhite.png"
              alt="더보기 아이콘"
              onClick={openNav}
            />
            {hambuger && (
              <Hambuger hambuger={hambuger} setHambuger={setHambuger} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
