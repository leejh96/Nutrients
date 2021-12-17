import React, { useState } from "react";
import SignInComponent from "../../components/auth/SigninComponent";
import client from "../../libs/client";
import { useNavigate } from "react-router-dom";
function SignInContainer({ setIsLoggedIn, setUser }) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async () => {
    try {
      const { email, password } = userInfo;
      const res = await client.post("/user/signin", {
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        client.defaults.headers.common[
          "Authorization"
        ] = `${res.data.accessToken}`;
        const user = await client.get("/user");

        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.message);
      } else if (error.response.status === 401) {
        alert(error.response.data.message);
      } else {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <SignInComponent
      userInfo={userInfo}
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
    />
  );
}

export default SignInContainer;
