import React from "react";
import styled from "styled-components";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../button/buttonComponent";
const SigninWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  position: absolute;
  top: 25%;
  left: 25%;
  box-sizing: border-box;
`;
const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 3rem;
  margin-bottom: 5rem;
`;

const SigninForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  .text {
    margin-bottom: 3rem;
  }
  .email,
  .password {
    width: 100%;
    font-size: 2.5rem;
    border: none;
    outline: none;
    border-bottom: 1px solid grey;
  }
  .email-text,
  .password-text {
    margin-bottom: 2rem;
  }
`;

const SubmitButton = styled(Button)`
  width: 15%;
  height: 3rem;
  border: 1px solid grey;
  background: ;
`;

function SigninComponent({ input, onChangeInput, onSubmitForm }) {
  return (
    <SigninWrapper>
      <Nav>
        <div className="back">
          <Link to="/">
            <MdArrowBackIosNew />
          </Link>
        </div>
      </Nav>
      <SigninForm onSubmit={onSubmitForm}>
        <div style={{ width: "100%", marginBottom: "3rem" }}>
          <div className="email-text">이메일</div>
          <input
            type="text"
            name="email"
            className="email"
            onChange={onChangeInput}
            value={input.email}
          />
        </div>
        <div style={{ width: "100%", marginBottom: "3rem" }}>
          <div className="password-text">비밀번호</div>
          <input
            type="password"
            name="password"
            id=""
            className="password"
            value={input.password}
            onChange={onChangeInput}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SubmitButton type="submit">로그인</SubmitButton>
        </div>
      </SigninForm>
    </SigninWrapper>
  );
}

export default SigninComponent;
