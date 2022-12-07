import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ProductList from './pages/ProductList/ProductList';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/Mypage';
import ProductPage from './pages/ProductPage/ProductPage';
import SignUp from './pages/SignUp/SignUp';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import BasketPage from './pages/BasketPage/BasketPage';
import Footer from '../src/components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/delivery-page" element={<DeliveryPage />} />
        <Route path="/basket-page" element={<BasketPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
