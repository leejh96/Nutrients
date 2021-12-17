import React from "react";
import SigninContainer from "../../containers/auth/SigninContainer";

function SigninPage({ setIsLoggedIn, setUser }) {
  return <SigninContainer setIsLoggedIn={setIsLoggedIn} setUser={setUser} />;
}

export default SigninPage;
