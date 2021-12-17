import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import WriteActionButtonComponent from "../../components/write/WriteActionButtonComponent";
import WriteContext from "../../context/WriteContext";
import client from "../../libs/client";

function WriteActionButtonContainer() {
  const { writeInfo, setWriteInfo } = useContext(WriteContext);
  const navigate = useNavigate();

  const onPublish = async () => {
    try {
      await client.post("/board", writeInfo);
      setWriteInfo({
        title: "",
        body: "",
        imgURL: "",
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const onCancel = () => {
    navigate(-1);
  };

  return (
    <WriteActionButtonComponent onPublish={onPublish} onCancel={onCancel} />
  );
}

export default WriteActionButtonContainer;
