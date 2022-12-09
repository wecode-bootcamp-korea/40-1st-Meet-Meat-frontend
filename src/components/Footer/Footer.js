import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-right">
        <div className="footer-logo">
          <span className="footer-name">고기잇</span>
          <img
            className="footer-image"
            src="/images/Footer/gogi.png"
            alt="pig"
          />
        </div>
        {FOOTER_DATA.map(meatMeat => {
          return (
            <div className="footer-text" key={meatMeat.id}>
              {meatMeat.company}
              <br /> 대표이사 : {meatMeat.name} | 주소 :{meatMeat.address}
              <br />
              사업자등록번호 : {meatMeat.buisness} <br /> 통신판매업신고번호 :
              {meatMeat.number} <br /> 개인정보관리책임자 : {meatMeat.charge}
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
        <span className="footer-infor">
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
    company: '(주)고기잇',
    name: 'ooo',
    address: '서울특별시 강남구 테헤란로 427 위워크',
    buisness: '111 - 111 - 1111',
    number: '2021-0668',
    charge: 'ooo',
  },
];
