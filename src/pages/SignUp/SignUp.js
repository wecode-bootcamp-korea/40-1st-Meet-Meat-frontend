import React from 'react';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div>
      <div>
        <p className="signUpTitleName">회원가입</p>
      </div>
      <div className="signUpInputContainer">
        <p>가입정보 입력</p>
        <div className="signUpInputContainerBox">
          <div className="signUpInputBox">
            <p className="signUpInputName">아이디(이메일 주소)</p>
            <input className="signUpInputText" type="text" />
          </div>
          <div className="signUpInputBox">
            <p className="signUpInputName">비밀번호</p>
            <input className="signUpInputText" type="password" />
          </div>
          <div className="signUpInputBox">
            <p className="signUpInputName">비밀번호 확인</p>
            <input className="signUpInputText" type="password" />
          </div>
          <div className="signUpInputBox">
            <p className="signUpInputName">주소</p>
            <input className="signUpInputText" type="text" />
          </div>

          <div className="signUpInputLastBox">
            <p className="signUpInputName">이름</p>
            <input className="signUpInputText" type="text" />
          </div>
        </div>
        <div className="signUpButton">
          <button className="signUpBackBtn">이전으로</button>
          <button className="signUpBtn">가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
