import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login-box">
        <h1 className="login-logo">로그인</h1>
        <form className="login-form">
          <span className="email-login">이메일 로그인</span>
          <input
            className="id-box"
            placeholder="아이디(이메일 주소)를 입력하세요"
          ></input>
          <input
            className="password-box"
            placeholder="비밀번호를 입력하세요"
          ></input>
          <button className="login-button">로그인</button>
        </form>
        <div className="sign-up-link">
          <Link to="/signUp">
            정육각이 처음이신가요?
            <span className="signup-link"> 회원가입하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
