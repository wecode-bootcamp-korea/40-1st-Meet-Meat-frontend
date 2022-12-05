import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/Mypage';
import ProductPage from './pages/ProductPage/ProductPage';
import SignUp from './pages/SignUp/SignUp';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import BasketPage from './pages/BasketPage/BasketPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/DeliveryPage" element={<DeliveryPage />} />
        <Route path="/BasketPage" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
