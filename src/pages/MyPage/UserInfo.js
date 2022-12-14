import React from 'react';
import './UserInfo.scss';
import { Link } from 'react-router-dom';

const UserInfo = ({ userData }) => {
  const { name, userNumber } = userData;
  return (
    <div className="userInfoData">
      <div className="userInfoDataTop">
        <div className="userInfoDataTopBtn">
          <p className="userInfoDataTopUserName">
            Hello, <span>{name}</span>님
          </p>

          <button className="userInfoDataTopLogOutBtn">로그아웃</button>
        </div>
        <Link to="/review-page">
          <button className="userInfoDataTopQuestionBtn">내 질문 보기</button>
        </Link>
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
            <p className="userInfoBottomListCheck">[{userNumber}]</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
