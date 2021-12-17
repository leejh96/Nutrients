import React from "react";
import styled from "styled-components";
import AuthTemplate from "./temp/AutoTemplate";

const SignUpFormBlock = styled.div`
  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #ddf8e9;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 0.5rem;
  & + & {
    margin-top: 1.3rem;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  margin-top: 1rem;
  background: #fff;

  background-color: #ddf8e9;
  color: #fff;
`;

function SignupComponent(userInfo) {
  const { email, password, nickname, age } = userInfo;
  return (
    <>
      <AuthTemplate>
        <SignUpFormBlock>
          <h3>회원가입</h3>
          <StyledInput
            name="email"
            value={email}
            placeholder="이메일을 입력하세요"
          />
          <StyledInput
            type="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
          />
          <StyledInput
            name="nickname"
            value={nickname}
            placeholder="닉네임을 입력하세요"
          />
          <StyledInput name="age" value={age} placeholder="나이를 입력하세요" />
          <StyledButton>회원가입</StyledButton>
        </SignUpFormBlock>
      </AuthTemplate>
    </>
  );
}

export default SignupComponent;
