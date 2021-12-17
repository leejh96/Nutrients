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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAAAeFBMVEX///8AAAD8/PxSUlKpqanc3NzIyMjo6OicnJz09PTLy8vv7+/k5ORcXFyAgIC8vLyTk5O0tLTBwcGJiYkmJiZvb2/S0tIwMDBLS0umpqYrKytlZWU3NzdXV1cbGxsPDw8/Pz95eXkLCwuOjo6Xl5cXFxc8PDx1dXVCXYlXAAAEdUlEQVR4nO3cC2KqMBAF0CaCQAER8EdRa6t97n+HT0GrAgHCxwn2ngWYyUiSSYi+vQEAAAAAAAAAAAAAAAAAAAAMlUEdwBBNOXUELdhEX/nco2m3Pcv/8nWapr0fmnZb4ov98sO0iFoP2DtRy83xRRQztgnIAghYTNZ2M453yhhjIeESZrNBPWp2MF+eUzbzKRcwa8bWhM3L0adJxhhz30kXfb5ljG5ykLEwN2nG2HZCXV3OGftUv1Yz/CO7WmnU0bydg5lSB1HOGu+3vyljRwXmYP8ciEMdhRh3pqNbxtjnwaaO6MQ7hzKijkLEidyfu5SxnU8dUcJIglEjlgzH+9qyB4QF7QM7/SZVeOgfWN5kxTIOykwjSX2t2AC1FuEum7FTQUu118wLL98idRw3+jT3jJ3EC+q47miXoIiOWbJ0bb4tSBnpXjPPuYZFHciJ7X19FmWMLTV1huYZvwb2jzgQa2HmJ7LURqWhmXCvoU0oo3AiUcZOe03l1va0vE3sqUJwtPm3KGVsR7/XzHNu8ZFs6/h48iHMmGKr5s3dAj9+dtt8YbrihJ2E6g3NxPQuxudmzYhGwmwl/mmqHlvp92E+L2tGNC8blmdzRfaaRdbPz5rhlU5kqb0iBXehw0Oo/WfNHu8rhuXZh6bodJbSH6Ptdw3lxVvLHPfpi5KkzAJm9teS42+KN0pZE2WOgUSCbMT9NGN4X7USptYxkNA6E/Sy+yZ4ENYalmcjNQvaDDMXd7ffNNerKrI73+TvNeuxfnKhd/jawPDc/OcLrZUtaLOifPCzbj6Ze2F1RXbHHcTQTPCiNa19+Px9X3siSw1kaKYKHjXGdq0+kutaLJcxtjSHMjRTy8JeNL+xYGj1p/4rd2iXWceCjjTaH9jjo9RElgpV3msW2wi6MpOtPuzxRHh0XWIZKb3XLGaIuyORNqvqVFFElSsHkvIV7i1tNRdSR6KGfTTAoZkqXgsuql9v2MF81jBlW7WPgcqIB2hiV7YmWEFY+Ga8ltVwCtq8kgF6yZtg4gnMBovlL1VfntRUZw6PI53/lqCcO74Wt8nYaWhS9rgDVu2ujlKiOqW+leontNX06l5266j8CW0Nh+p+dmh9GNZeU2T+xJxthrbXFGpaa8kLX2FopuovBu3MyH6v2QenusMdeJ2hmXpG1tS6Q9uFiv1Ue7PBvDyRoFX3uw3i32v2RXSO24WhvNeU19+8to6o+9afvrIWD3+vWaKfrKl/G6il5qeKIsvolQraYpJvxyu5w3x5IqnbMw+l79B2qMPztZk/7FNtGV1NbKPXLGgF/E5y9rIFrUj7h+0l95oV2j5sGwX+gIRA9iazjO/j31kBHtmNcza0i3qdyv7YoKZXO6GVFTbImTp/QEJGNm2ukv/H83QyZ7pbE4/ZhV5zJZ1N/tQeoNK+OmWryQIpy7BL87aNMTCLWV7xTyvWbqTjISvBF2Z8d0XNjfe+/vpnswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABK+A/e6DGDMOOXZwAAAABJRU5ErkJggg=="
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
