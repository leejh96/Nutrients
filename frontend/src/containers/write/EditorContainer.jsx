import React, { useContext, useState } from "react";
import EditorComponent from "../../components/write/EditorComponent";
import WriteContext from "../../context/WriteContext";
import client from "../../libs/client";

function EditorContainer() {
  const { writeInfo, setWriteInfo } = useContext(WriteContext);
  const [imgInfo, setImageInfo] = useState({
    imgFile: null,
    imgURL: "",
    imgS3URL: "",
  });

  const onChangeImage = async (e) => {
    const imgFile = e.target.files[0];
    const imgURL = URL.createObjectURL(imgFile);
    setImageInfo({
      ...imgInfo,
      imgURL,
      imgFile,
    });

    const formData = new FormData();
    formData.append("img", imgFile); //single안에 값과 일치시킴
    try {
      const response = await client.post("/board", formData, {
        "Content-type": "multipart/form-data",
      });
      if (response.status === 200) {
        const imgS3URL = response.data.data.location;
        setWriteInfo({
          ...writeInfo,
          imgURL: imgS3URL,
        });
        console.log(imgS3URL);
      }
    } catch (error) {
      alert("이미지 업로드에 실패했습니다.");
    }
  };
  const onChangeField = (payload) => {
    const { key, value } = payload; //quill문법
    console.log(key);
    console.log(value);

    setWriteInfo({
      ...writeInfo,
      [key]: value,
    });
    console.log(writeInfo);
  };
  return (
    <EditorComponent
      onChangeField={onChangeField}
      imgURL={imgInfo.imgURL}
      onChangeImage={onChangeImage}
      writeInfo={writeInfo}
    />
  );
}

export default EditorContainer;
