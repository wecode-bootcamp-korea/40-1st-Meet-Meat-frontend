import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.scss';

const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    fetch('http://10.58.52.55:8000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
        address: userInfo.address,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message !== 'SIGNUP_SUCCESS') {
          alert('입력하신 정보를 다시 확인해주세요.');
        } else {
          alert('환영합니다!');
          navigate('/login');
        }
      });
  };

  const handleLogin = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isVaildEmail = userInfo.email.includes('@');
  const isVaildPass = userInfo.password.length > 5;
  const isVaildAdress = userInfo.address.length > 5;
  const isVaildName = userInfo.name.length > 2;

  const buttonAble =
    isVaildEmail &&
    isVaildPass &&
    isVaildAdress &&
    isVaildName &&
    userInfo.password === userInfo.checkPassword;

  return (
    <div className="signUpForm">
      <div>
        <p className="signUpFormTitleName">회원가입</p>
      </div>
      <div className="signUpFormInputContainer">
        <p>가입정보 입력</p>
        <div className="signUpFormInputContainerBox">
          <div className="signUpFormInputBox">
            <p className="signUpFormInputName">아이디(이메일 주소)</p>
            <input
              className="signUpFormInputText"
              type="text"
              onChange={handleLogin}
              name="email"
              value={userInfo.email}
              placeholder="email 형식"
            />
          </div>
          <div className="signUpFormInputBox">
            <p className="signUpFormInputName">비밀번호</p>
            <input
              className="signUpFormInputText"
              type="password"
              name="password"
              onChange={handleLogin}
              placeholder="비밀번호 8자리 이상"
            />
          </div>
          <div className="signUpFormInputBox">
            <p className="signUpFormInputName">비밀번호 확인</p>
            <input
              className="signUpFormInputText"
              type="password"
              onChange={handleLogin}
              name="checkPassword"
              placeholder="비밀번호 8자리 이상"
            />
          </div>
          <div className="signUpFormInputBox">
            <p className="signUpFormInputName">주소</p>
            <input
              className="signUpFormInputText"
              type="text"
              name="address"
              onChange={handleLogin}
            />
          </div>

          <div className="signUpFormInputLastBox">
            <p className="signUpFormInputName">이름</p>
            <input
              className="signUpFormInputText"
              type="text"
              name="name"
              onChange={handleLogin}
            />
          </div>
        </div>
        <div className="signUpFormButton">
          <button
            className="signUpFormBackBtn"
            onClick={() => {
              navigate(-1);
            }}
          >
            이전으로
          </button>
          <button
            className="signUpFormBtn"
            disabled={!buttonAble}
            onClick={handleSubmit}
          >
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
