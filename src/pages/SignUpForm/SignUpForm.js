import React from 'react';
import { useState } from 'react';
import './SignUpForm.scss';

const SignUpForm = () => {
  const Submit = () => {
    fetch('http://10.58.52.125:8000/users/signup', {
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
      .then(result => result);
  };

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
    address: '',
  });
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
    <div className="signUp">
      <div>
        <p className="signUpTitleName">회원가입</p>
      </div>
      <div className="signUpInputContainer">
        <p>가입정보 입력</p>
        <div className="signUpInputContainerBox">
          <div className="signUpInputBox">
            <p className="signUpInputName">아이디(이메일 주소)</p>
            <input
              className="signUpInputText"
              type="text"
              onChange={handleLogin}
              name="email"
              value={userInfo.email}
              placeholder="email 형식"
            />
          </div>
          <div className="signUpInputBox">
            <p className="signUpInputName">비밀번호</p>
            <input
              className="signUpInputText"
              type="password"
              name="password"
              onChange={handleLogin}
              placeholder="비밀번호 8자리 이상"
            />
          </div>
          <div className="signUpInputBox">
            <p className="signUpInputName">비밀번호 확인</p>
            <input
              className="signUpInputText"
              type="password"
              onChange={handleLogin}
              name="checkPassword"
              placeholder="비밀번호 8자리 이상"
            />
          </div>
          <div className="signUpInputBox">
            <p className="signUpInputName">주소</p>
            <input
              className="signUpInputText"
              type="text"
              name="address"
              onChange={handleLogin}
            />
          </div>

          <div className="signUpInputLastBox">
            <p className="signUpInputName">이름</p>
            <input
              className="signUpInputText"
              type="text"
              name="name"
              onChange={handleLogin}
            />
          </div>
        </div>
        <div className="signUpButton">
          <button className="signUpBackBtn">이전으로</button>
          <button className="signUpBtn" disabled={!buttonAble} onClick={Submit}>
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
