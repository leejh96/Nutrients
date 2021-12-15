import React from "react";
import styled from "styled-components";
import Button from "../button/buttonComponent";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  height: 10rem;
  display: flex;
  justify-content: space-between;
  padding: 0 6rem;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  background: rgb(235, 235, 235);
  .left {
    height: 100%;
    .logo {
      height: 100%;
    }
  }
`;

const Btn = styled(Button)`
  background: rgb(221, 248, 233);
  margin-left: 3rem;
  font-size: 2.5rem;
`;

function NavbarComponent() {
  return (
    <Nav>
      <div className="left">
        <Link to="/">
          <img
            className="logo"
            src="https://lee-nutrient.s3.ap-northeast-2.amazonaws.com/1639560603977.png"
            alt=""
          />
        </Link>
      </div>
      <div className="right">
        <div>
          <Link to="/signin">
            <Btn>로그인</Btn>
          </Link>
          <Link to="/signup">
            <Btn>회원가입</Btn>
          </Link>
        </div>
      </div>
    </Nav>
  );
}

export default NavbarComponent;
