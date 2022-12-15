import React, { useEffect, useRef, useState } from 'react';
import './Modal.scss';

const AddressPage = ({ setOpenModal, meatId, meatPrice, meatName }) => {
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState('');

  useEffect(() => {
    const handler = e => {
      if (menuModal && !menuModal.current.contains(e.target)) {
        setOpenModal(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  const countPlus = () => {
    setCount(count => count + 1);
  };

  const countMinus = () => {
    if (count < 2) {
      setCount(1);
      return;
    }
    setCount(count => count - 1);
  };

  const close = () => {
    setOpenModal(false);
  };

  const handleSelect = e => {
    setSelect(e.target.value);
  };
  const menuModal = useRef();
  const totalNum = meatPrice * count;
  return (
    <div className="modal-page" ref={menuModal}>
      <div className="modal-layout">
        <div className="modal-top">
          <button className="modal-close" onClick={close}>
            x
          </button>
        </div>
        <div className="modal-main">
          <div className="modal-name">{meatName}</div>
          <div className="modal-count">
            <button onClick={countMinus}>-</button>
            <div className="modal-count-box">{count}</div>
            <button onClick={countPlus}>+</button>
          </div>
          <select
            className="modal-select"
            onChange={handleSelect}
            value={select}
          >
            {MEET_OPTION.map(option => {
              return <option key={option.id}>{option.option}</option>;
            })}
          </select>
          <div className="modal-price">
            <span>{totalNum}원</span>
          </div>
          <button className="modal-buy">장바구니로</button>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;

const MEET_OPTION = [
  { id: 1, option: '얇게(11mm)' },
  { id: 2, option: '보통(16mm)' },
  { id: 3, option: '두껍게(24mm)' },
];
