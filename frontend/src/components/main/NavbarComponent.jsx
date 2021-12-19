import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../button/buttonComponent";
import { Link } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import UserContext from "../../context/UserContext";
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

  .image {
    border-radius: 70%;
    margin-right: 1rem;
    overflow: hidden;
    width: 5rem;
    height: 5rem;
  }
  .user-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .myinfo {
    display: flex;
    align-items: center;
  }
  .nickname {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

const Btn = styled(Button)`
  background: rgb(221, 248, 233);
  margin-left: 3rem;
  font-size: 2.5rem;
`;

function NavbarComponent() {
  const { userInfo, isLoggedIn } = useContext(UserContext);
  return (
    <Nav>
      <div className="left">
        <Link to="/">
          <img
            className="logo"
            src="https://lee-nutrient.s3.ap-northeast-2.amazonaws.com/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="right">
        <div>
          {isLoggedIn ? (
            <div className="myinfo">
              <div className="image">
                <img
                  src={
                    userInfo.image ||
                    "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                  }
                  alt=""
                  className="user-image"
                />
              </div>
              <div className="nickname">{userInfo.nickname}님</div>
              <div className="mypage-button">
                <Link to="/mypage">
                  <AiFillSetting size={20} color="" />
                </Link>
              </div>
            </div>
          ) : (
            <>
              <Link to="/signin">
                <Btn>로그인</Btn>
              </Link>
              <Link to="/signup">
                <Btn>회원가입</Btn>
              </Link>
            </>
          )}
        </div>
      </div>
    </Nav>
  );
}

export default NavbarComponent;
