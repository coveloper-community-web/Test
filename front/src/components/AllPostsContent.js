//전체 글 게시판(쓰는기능은 없고 읽기 전용)
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AllPostsContent.css";

function AllPostsContent() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function fetchAllPosts() {
    try {
      let token = localStorage.getItem("token");
      // 모든 게시판의 글들을 가져오는 API를 호출
      const response = await axios.get(
        "http://localhost:8080/api/board/posts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts(response.data.reverse()); // 전체 게시글을 가져온다
    } catch (error) {
      console.error("Error fetching all posts", error);
    }
  }

  function onClickPreviousPage() {}

  function onClickNextPage() {}

  function onClickPost(postId) {
    console.log("navigate detail");
    navigate(`/posts/${postId}`);
  }

  return (
    <div className="post-list-container">
      <header>
        <h2>전체 글 게시판</h2>
      </header>
      <hr></hr>
      <section className="post-list-section">
        {posts.map((post) => (
          <article
            key={post.id}
            onClick={() => onClickPost(post.id)}
            className="post-item"
          >
            <h3>{post.title}</h3>
            <footer>
              <span>작성자: {post.authorName}</span>
              <br></br>
              <span>작성일: {post.createdAt}</span>
            </footer>
          </article>
        ))}
      </section>
      <div className="pagination">
        <button onClick={onClickPreviousPage}>이전</button>
        <span></span>
        <button onClick={onClickNextPage}>다음</button>
      </div>
    </div>
  );
}

export default AllPostsContent;
