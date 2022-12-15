import React from 'react';
import './SignUpForm.scss';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
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
            <input className="signUpFormInputText" type="text" />
          </div>
          <div className="signUpFormInputBox">
            <p className="signUpFormInputName">비밀번호</p>
            <input className="signUpFormInputText" type="password" />
          </div>
          <div className="signUpFormInputBox">
            <p className="signUpFormInputName">비밀번호 확인</p>
            <input className="signUpFormInputText" type="password" />
          </div>
          <div className="signUpFormInputBox">
            <p className="signUpFormInputName">주소</p>
            <input className="signUpFormInputText" type="text" />
          </div>

          <div className="signUpFormInputLastBox">
            <p className="signUpFormInputName">이름</p>
            <input className="signUpFormInputText" type="text" />
          </div>
        </div>
        <div className="signUpFormButton">
          <Link to="/sign-up">
            <button className="signUpFormBackBtn">이전으로</button>
          </Link>
          <button className="signUpFormBtn">가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
