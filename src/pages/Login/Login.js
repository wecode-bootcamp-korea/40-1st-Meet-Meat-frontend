import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-area">
      <div className="login-box">
        <h1>로그인</h1>
        <form>
          <span>이메일 로그인</span>
          <input
            className="id-box"
            placeholder="아이디(이메일 주소)를 입력하세요"
          ></input>
          <input
            className="password-box"
            placeholder="비밀번호를 입력하세요"
          ></input>
          <button>로그인</button>
        </form>
        <div className="sign-up-link">
          <Link to="/signUp">
            정육각이 처음이신가요?<span> 회원가입하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
