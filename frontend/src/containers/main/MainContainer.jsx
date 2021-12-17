import React, { useContext, useEffect, useState } from "react";
import MainComponent from "../../components/main/MainComponent";
import UserContext from "../../context/UserContext";
import client from "../../libs/client";

function MainContainer() {
  const [board, setBoard] = useState([]);
  // const { userInfo } = useContext(UserContext);
  const fetchData = async () => {
    const res = await client.get("/board");
    if (res.status === 200) {
      return res.data.posts;
    }
  };

  useEffect(() => {
    setBoard(fetchData());
  }, []);
  return <MainComponent board={board} />;
}

export default MainContainer;
