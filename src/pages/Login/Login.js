import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { API } from '../../config';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();

  const isLoginValidatation = id.includes('@') && pw.length >= 8;

  const handleLogin = e => {
    e.preventDefault();
    fetch(`http://10.58.52.55:8000/users/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);

          alert('환영합니다!');
          navigate('/');
        } else if (data.message === 'INVALID_INPUT_DATA') {
          alert('존재하지 않는 유저입니다.');
          navigate('/sign-up');
        }
      });
  };

  return (
    <div className="login">
      <div className="login-box">
        <h1 className="login-logo">로그인</h1>
        <form className="login-form">
          <span className="email-login">이메일 로그인</span>
          <input
            onChange={e => {
              setId(e.target.value);
            }}
            className="id-box"
            placeholder="아이디(이메일 주소)를 입력하세요"
            value={id}
          />
          <input
            onChange={e => {
              setPw(e.target.value);
            }}
            className="password-box"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={pw}
          />
          <button
            onClick={handleLogin}
            className={isLoginValidatation ? 'login-button' : 'login-button-no'}
            disabled={!isLoginValidatation}
          >
            로그인
          </button>
        </form>
        <div className="sign-up-link">
          <Link to="/sign-up">
            정육각이 처음이신가요?
            <span className="signup-link"> 회원가입하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
