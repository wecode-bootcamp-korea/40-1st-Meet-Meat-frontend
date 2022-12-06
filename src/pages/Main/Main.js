import React from 'react';
import Promotion from './MainList/Promotion';
import BestProduct from './MainList/BestProduct';
import Delivery from './MainList/Delivery';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Promotion />
      <Delivery />
      <BestProduct />
    </div>
  );
};
export default Main;
