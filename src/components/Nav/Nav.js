import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hambuger from './Hambuger';
import './Nav.scss';

const Nav = () => {
  const [isClickHambuger, setIsClickHambuger] = useState(false);

  const openHambugerBar = () => {
    setIsClickHambuger(true);
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
          <Link to="/" className="navLink">
            <p className="navMainName">고기잇</p>
          </Link>
          <ul className="navMainMenu">
            <Link to="/product-list/all" className="navLink">
              <li className="navMainMenuList">쇼핑하기</li>
            </Link>
            <Link to="/delivery-page" className="navLink">
              <li className="navMainMenuList">배송안내</li>
            </Link>
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
              <Link to="/login" className="navLink">
                <li className="navRightSubList"> 로그인</li>
              </Link>
              <Link to="/sign-up" className="navLink">
                <li className="navRightSubList">회원가입</li>
              </Link>
            </ul>
          </div>

          <div className="navSideIcon">
            <Link to="/basket-page" className="navLink">
              <img
                className="navRightCartIcon"
                src="/images/Nav/BasketWhite.png"
                alt="카트이미지"
              />
            </Link>
            <img
              className="navRightSideIcon"
              src="/images/Nav/MenuBarWhite.png"
              alt="더보기 아이콘"
              onClick={openHambugerBar}
            />
            {isClickHambuger && (
              <Hambuger setIsClickHambuger={setIsClickHambuger} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
