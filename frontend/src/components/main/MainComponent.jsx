import React from "react";
import NavbarComponent from "./NavbarComponent";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import CommentComponent from "./CommentComponent";
const Main = styled.main`
  box-sizing: border-box;
  width: 60%;
  margin: 10rem auto 0;
  background-color: rgb(221, 248, 233);
  padding: 3rem 5rem;
  overflow: auto;
  border-radius: 5px 5px 5px 5px;
`;

function MainComponent({
  onClickLikeIcon,
  onClickCommentIcon,
  likeToggle,
  commentToggle,
  isLoggedIn,
  user,
  comment,
  onChangeComment,
}) {
  return (
    <>
      <NavbarComponent isLoggedIn={isLoggedIn} user={user} />
      <Main>
        <CardComponent
          onClickLikeIcon={onClickLikeIcon}
          onClickCommentIcon={onClickCommentIcon}
          likeToggle={likeToggle}
          commentToggle={commentToggle}
          user={user}
          isLoggedIn={isLoggedIn}
        />
        {commentToggle ? (
          <CommentComponent
            comment={comment}
            onChangeComment={onChangeComment}
          />
        ) : null}
      </Main>
    </>
  );
}

export default MainComponent;
