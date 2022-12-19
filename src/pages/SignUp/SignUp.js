import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="signUpMain">
      <div className="signUpTitleName">회원가입</div>
      <div>
        <p className="signUpEmail">이메일로 가입하기</p>
        <Link to="/sign-up-form">
          <button className="signupButton">고기잇 회원가입 하기</button>
        </Link>
        <div>
          <span className="signUpLoginButton">
            고기잇 회원이신가요?
            <Link to="/login" className="signUpLoginButtonTag">
              로그인 하기
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
