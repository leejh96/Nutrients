import React, { useState } from "react";
import MainComponent from "../../components/main/MainComponent";

function MainContainer({ isLoggedIn, user }) {
  const [comment, setComment] = useState("");
  const [commentToggle, setCommentToggle] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };
  const onClickCommentIcon = () => {
    if (!isLoggedIn) {
      return alert("로그인 해주세요");
    }
    setCommentToggle((prev) => !prev);
  };
  const onClickLikeIcon = () => {
    if (!isLoggedIn) {
      return alert("로그인 해주세요");
    }
    setLikeToggle((prev) => !prev);
  };

  return (
    <MainComponent
      commentToggle={commentToggle}
      likeToggle={likeToggle}
      onClickCommentIcon={onClickCommentIcon}
      onClickLikeIcon={onClickLikeIcon}
      isLoggedIn={isLoggedIn}
      user={user}
      comment={comment}
      onChangeComment={onChangeComment}
    />
  );
}

export default MainContainer;
