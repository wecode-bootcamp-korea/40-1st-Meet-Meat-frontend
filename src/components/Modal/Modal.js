import React from 'react';
import './Modal.scss';

const AddressPage = ({ setOpenAddress }) => {
  const close = () => {
    setOpenAddress(false);
  };
  return (
    <div className="address-page">
      <div className="address-layout">
        <div className="address-name">주소 선택</div>
        <button className="address-close" onClick={close}>
          x
        </button>
      </div>
    </div>
  );
};

export default AddressPage;
