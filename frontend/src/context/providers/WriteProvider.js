import WriteContext from "../WriteContext";
import { useState } from "react";
const WriteProvider = ({ children }) => {
  const [writeInfo, setWriteInfo] = useState({
    title: "",
    body: "",
    imgURL: "",
  });
  return (
    <WriteContext.Provider
      value={{
        writeInfo,
        setWriteInfo,
      }}
    >
      {children}
    </WriteContext.Provider>
  );
};

export default WriteProvider;
