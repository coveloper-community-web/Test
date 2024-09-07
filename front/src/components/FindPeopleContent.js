import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function FindPeopleContent({ isLoggedIn }) {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const questionsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions(currentPage);
  }, [currentPage]);

  async function fetchQuestions(page) {
    try {
      const response = await axios.get("http://localhost:8080/api/qna", {  //추후 수정해야함
        params: {
          page: page,
          size: questionsPerPage,
        },
      });
      setQuestions(response.data.questions); //QnA게시글들 가져온다
      setTotalPages(response.data.totalPages); //QnA게시글 총 갯수도 가져온다
    } catch (error) {
      console.error("Error fetching questions", error);
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleWriteButtonClick() {
    if (1) {
      navigate("/writefindpeople");
    }
    /*
    if (isLoggedIn) {
      // 로그인이 되어 있으면 글쓰기 페이지로 이동
      navigate("/writeqna");
    } else {
      // 로그인이 안 되어 있으면 alert로 사용자에게 알림
      alert("로그인이 필요합니다. 로그인 후 이용해주세요.");
    }
    */
  }

  return (
    <div>
      <header>
        <h2>구인 게시판</h2>
        <button onClick={handleWriteButtonClick}>글쓰기</button>{" "}
        {/* 글쓰기 버튼 */}
      </header>
      <section>
        {questions.map((question) => (
          <article key={question.id}>
            <h3>{question.title}</h3>
            <p>{question.content}</p>
            <footer>
              <span>작성자: {question.author}</span>
              <span>작성일: {question.created_at}</span>
            </footer>
          </article>
        ))}
      </section>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          이전
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음
        </button>
      </div>
    </div>
  );
}

FindPeopleContent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired, // isLoggedIn을 필수 prop으로 설정
};

export default FindPeopleContent;
