import React, { useEffect, useContext } from "react";
import MainComponent from "../../components/main/MainComponent";
import BoardContext from "../../context/BoardContext";
import client from "../../libs/client";

function MainContainer() {
  const { board, setBoard } = useContext(BoardContext);
  useEffect(() => {
    const fetchData = async () => {
      const res = await client.get("/board");
      setBoard(res.data.posts);
    };
    fetchData();

    return () => {
      setBoard([]);
    };
  }, [setBoard]);

  return <MainComponent board={board} />;
}

export default MainContainer;
