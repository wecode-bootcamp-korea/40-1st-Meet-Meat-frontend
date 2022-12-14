import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import ProductList from './pages/ProductList/ProductList';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/Mypage';
import ProductPage from './pages/ProductPage/ProductPage';
import SignUp from './pages/SignUp/SignUp';
import SignUpForm from './pages/SignUpForm/SignUpForm';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import BasketPage from './pages/BasketPage/BasketPage';
import Footer from '../src/components/Footer/Footer';
import Review from './pages/ReviewPage/Review';
import OrderPage from '../src/pages/OrderPage/OrderPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/product-list/:categoryId" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/product-page/:productId/" element={<ProductPage />} />
        <Route path="/sign-up-form" element={<SignUpForm />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/delivery-page" element={<DeliveryPage />} />
        <Route path="/basket-page" element={<BasketPage />} />
        <Route path="/review-page" element={<Review />} />
        <Route path="/order-page" element={<OrderPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
