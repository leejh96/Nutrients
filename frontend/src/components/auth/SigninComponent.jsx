import React from "react";
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
const NavbarBlock = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 5%;
  position: fixed;
  top: 0;
  background: white;
`;
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .center {
    display: flex;
    align-items: center;
  }
  .left {
    text-align: start;
  }
`;

const NavbarText = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  color: black;

  font-weight: bolder;

  font-size: 3rem;
`;
const AuthTemplateBlock = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const SignInFormBlock = styled.div`
  width: 400px;
  box-sizing: border-box;
  text-align: center;
  h3 {
    text-align: start;
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-radius: 2px;
  outline: none;

  width: 100%;
  height: 25%;
  box-sizing: border-box;
  padding-bottom: 0.5rem;
  background-color: rgb(221 248 233);
  margin-bottom: 3rem;
`;

const StyledButton = styled.button`
  width: 30%;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  padding: 1.5rem 2rem;
  outline: none;
  cursor: pointer;
  background-color: rgb(221 248 233);
  font-size: 1.5rem;
  color: black;
  position: justify;
`;

function SignInComponent({ userInfo, onClickSubmit, onChangeInput }) {
  const { email, password } = userInfo;

  return (
    <NavbarBlock>
      <NavbarWrapper>
        <div className="left">
          <Link to="/">
            <MdArrowBackIosNew z-index={-1} size={30} />
          </Link>
        </div>
        <div className="center">
          <NavbarText>로그인</NavbarText>
        </div>
      </NavbarWrapper>
      <AuthTemplateBlock>
        <SignInFormBlock>
          <h3>이메일</h3>
          <StyledInput name="email" onChange={onChangeInput} value={email} />
          <h3>비밀번호</h3>
          <StyledInput
            name="password"
            onChange={onChangeInput}
            value={password}
          />

          <StyledButton onClick={onClickSubmit}>로그인</StyledButton>
        </SignInFormBlock>
      </AuthTemplateBlock>
    </NavbarBlock>
  );
}

export default SignInComponent;
