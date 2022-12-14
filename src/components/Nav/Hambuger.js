import { React, useEffect, useRef } from 'react';
import './Hambuger.scss';
import { Link, useNavigate } from 'react-router-dom';

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

  const changeCategory = category => {
    navigate(`/product-list?categories=${category}`);
  };

  const navigate = useNavigate();
  return (
    <div ref={modalRef} className="hambuger">
      <div className="hambuger-top">
        <div className="hambuger-menu">메뉴</div>
        <div className="icon-wrapper">
          <Link to="/basket-page" className="hambugerLink">
            <img
              className="basket"
              src="/images/Nav/BasketWhite.png"
              alt="장바구니"
            />
          </Link>
          <button className="hambuger-close" onClick={close}>
            X
          </button>
        </div>
      </div>
      <p className="main-title">쇼핑하기</p>
      <div className="hambuger-main">
        <ul className="hambuger-categoris">
          {CATEGORIS_DATA.map(animal => {
            return (
              <li
                key={animal.id}
                className="hambuger-items"
                onClick={() => changeCategory(animal.category)}
              >
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
        <Link to="/my-page" className="hambugerLink">
          <div>마이페이지</div>
        </Link>
        <Link to="/delivery-page" className="hambugerLink">
          <div>배송안내</div>
        </Link>
      </div>
    </div>
  );
};

export default Hambuger;

const CATEGORIS_DATA = [
  {
    id: 1,
    name: '돼지',
    category: 'fork',
    image: '/images/Nav/Hambuger/pig.png',
    alt: '돼지',
  },
  {
    id: 2,
    name: '소',
    category: 'beef',
    image: '/images/Nav/Hambuger/cow.png',
    alt: '소',
  },
  {
    id: 3,
    name: '닭',
    category: 'chicken',
    image: '/images/Nav/Hambuger/chicken.png',
    alt: '닭',
  },
  {
    id: 4,
    name: '오리',
    category: 'duck',
    image: '/images/Nav/Hambuger/duck.png',
    alt: '오리',
  },
];
