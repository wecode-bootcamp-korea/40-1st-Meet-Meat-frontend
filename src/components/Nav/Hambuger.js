import { React, useEffect, useRef } from 'react';
import './Hambuger.scss';

const Hambuger = ({ setIsClickHambuger }) => {
  const close = () => {
    setIsClickHambuger(false);
  };

  useEffect(() => {
    const handler = e => {
      if (modalRef && !modalRef.current.contains(e.target)) {
        setIsClickHambuger(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const modalRef = useRef();
  return (
    <div ref={modalRef} className="hambuger">
      <div className="hambuger-top">
        <div className="hambuger-menu">메뉴</div>
        <img
          className="basket"
          src="/images/Nav/BasketWhite.png"
          alt="장바구니"
        />
        <button className="hambuger-close" onClick={close}>
          X
        </button>
      </div>
      <p className="main-title">쇼핑하기</p>
      <div className="hambuger-main">
        <ul className="hambuger-categoris">
          {CATEGORIS_DATA.map(animal => {
            return (
              <li key={animal.id} className="hambuger-items">
                <img
                  className="menu-icon"
                  src={animal.image}
                  alt={animal.alt}
                />
                <div className="menu-title">{animal.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hambuger-bottom">
        <div>마이페이지</div>
        <div>배송안내</div>
      </div>
    </div>
  );
};

export default Hambuger;

const CATEGORIS_DATA = [
  { id: 1, name: '돼지', image: '/images/Nav/Hambuger/pig.png', alt: '돼지' },
  { id: 2, name: '소', image: '/images/Nav/Hambuger/cow.png', alt: '소' },
  { id: 3, name: '닭', image: '/images/Nav/Hambuger/chicken.png', alt: '닭' },
  { id: 4, name: '오리', image: '/images/Nav/Hambuger/duck.png', alt: '오리' },
];
