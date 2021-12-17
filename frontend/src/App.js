import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/SignupPage";
import SigninPage from "./pages/auth/SigninPage";
import WritePage from "./pages/write/WritePage";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./pages/main/MainPage";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </>
  );
}

export default App;
