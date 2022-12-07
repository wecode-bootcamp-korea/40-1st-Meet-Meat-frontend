import React from 'react';
import Promotion from './Section/Promotion/Promotion';
import BestProduct from './Section/BestProduct/BestProduct';
import Delivery from './Section/Delivery/Delivery';
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
