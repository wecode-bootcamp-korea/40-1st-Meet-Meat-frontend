import React from 'react';
import './StartSignUp.scss';

const StartSignUp = () => {
  return (
    <div className="startSignUpMain">
      <div className="startSignUpTitleName">회원가입</div>
      <div>
        <p className="startSignUpEmail">이메일로 가입하기</p>
        <button className="startSignupButton">정육각 회원가입 하기</button>
        <div>
          <span className="startSignUpLoginButton">
            정육각 회원이신가요?{' '}
            <a className="startSignUpLoginButtonTag" href="www.naver.com">
              로그인 하기
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StartSignUp;
