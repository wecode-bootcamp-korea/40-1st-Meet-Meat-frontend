import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-right">
        <div className="footer-logo">
          <span className="foooter-name">정육각</span>
          <img
            className="footer-image"
            src="/images/Footer/gogi.png"
            alt="pig"
          ></img>
        </div>
        {FOOTER_DATA.map(element => {
          return (
            <div className="footer-text" key={element.id}>
              {element.company}
              <br /> 대표이사 : {element.name} | 주소 :{element.address}
              <br />
              사업자등록번호 : {element.buisness} <br /> 통신판매업신고번호 :
              {element.number} <br /> 개인정보관리책임자 : {element.charge}
            </div>
          );
        })}
      </div>
      <div className="footer-left">
        <div className="footer-customer-center">
          고객센터 <br />
        </div>
        <div className="footer-call">
          1800-0658 <br />
        </div>
        <span className="foooter-infor">
          평일:08:30 - 17:30 <br />
          점심:12:30 - 13:30 <br />
          (토,일 및 공휴일 휴무)
        </span>
        <br />
      </div>
    </div>
  );
};

export default Footer;

const FOOTER_DATA = [
  {
    id: 1,
    company: '(주)정육각',
    name: '김재연',
    address: '경기도 김포시 고촌읍 아리육로 57번길 126',
    buisness: '224 - 87 - 00271',
    number: '2021-경기김포-0668',
    charge: '박준태',
  },
];
