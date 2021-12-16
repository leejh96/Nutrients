import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/SignupPage";
import SigninPage from "./pages/auth/SigninPage";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./pages/main/MainPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState({
    id: "61b996bb34b88dcb469aa98b",
    email: "asdfasd",
    nickname: "asdfasdf",
    age: "123",
    gender: "female",
    image:
      "https://lee-nutrient.s3.ap-northeast-2.amazonaws.com/1639560603977.png",
  });
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<MainPage isLoggedIn={isLoggedIn} user={user} />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/signin"
          element={
            <SigninPage setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
