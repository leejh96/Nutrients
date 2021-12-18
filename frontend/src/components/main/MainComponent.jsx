import React from "react";
import NavbarComponent from "./NavbarComponent";
import styled from "styled-components";
import Button from "../button/buttonComponent";
import { Link } from "react-router-dom";
import PostContainer from "../../containers/main/PostContainer";

const Main = styled.main`
  margin: 10rem auto 0;
  height: 85.5vh;
  background-color: rgb(247, 247, 247);
  padding: 3rem 5rem;
  overflow: auto;
`;

const Notice = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;

const PostButton = styled(Button)`
  margin-top: 2rem;
  border: 1px solid grey;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  font-size: 2rem;
`;
function MainComponent({ board }) {
  return (
    <>
      <NavbarComponent />
      <Main>
        {board.length > 0 ? (
          board.map((post) => <PostContainer key={post.id} post={post} />)
        ) : (
          <Notice>
            <div>게시물을 등록하세요</div>
            <Link to="/write">
              <PostButton>작성하기</PostButton>
            </Link>
          </Notice>
        )}
      </Main>
    </>
  );
}

export default MainComponent;
