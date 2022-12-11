import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="startSignUpMain">
      <div className="startSignUpTitleName">회원가입</div>
      <div>
        <p className="startSignUpEmail">이메일로 가입하기</p>
        <Link to="/sign-up-form">
          <button className="startSignupButton">정육각 회원가입 하기</button>
        </Link>
        <div>
          <span className="startSignUpLoginButton">
            정육각 회원이신가요?
            <Link to="/login" className="startSignUpLoginButtonTag">
              로그인 하기
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
