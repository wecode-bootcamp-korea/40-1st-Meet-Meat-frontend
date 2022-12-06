import React from 'react';
import '../SignUp/SignUp.scss';

const SignUp = () => {
  return (
    <div>
      <div>
        <p className="signUpTitle">회원가입</p>
      </div>
      <div className="signUpContainer">
        <p className="">가입정보입력</p>
        <div className="signUpInputBoxContainer">
          <tr className="signUpInputBox">
            <th>아이디(이메일주소)</th>
            <td>
              <input className="signUpInput" type="text" />
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>
              <input className="signUpInput" type="password" />
            </td>
          </tr>
          <tr>
            <th>비밀번호 확인</th>
            <td>
              <input className="signUpInput" type="password" />
            </td>
          </tr>
          <tr>
            <th>이름</th>
            <td>
              <input className="signUpInput" type="text" />
            </td>
          </tr>
        </div>
        <div>
          <button className="BackBtn">이전으로</button>
          <button className="signUpBtn">가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
