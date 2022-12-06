import React from 'react';
import Promotion from './MainList/Promotion';
import BestProductList from './MainList/BestProductList';
import Delivery from './MainList/Delivery';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Promotion />
      <Delivery />
      <BestProductList />
    </div>
  );
};
export default Main;
