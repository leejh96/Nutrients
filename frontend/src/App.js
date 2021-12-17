import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/SignupPage";
import SigninPage from "./pages/auth/SigninPage";
import WritePage from "./pages/WritePage";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./pages/main/MainPage";
import client from "./libs/client";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </>
  );
}

export default App;
