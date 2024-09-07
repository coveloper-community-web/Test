/**
 * 로그인 페이지로 이동했을 때 컴포넌트
 */
import PropTypes from "prop-types";
import styles from "./BackgroundMenu.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BackgroundMenu = ({ className = "", onLoginSuccess }) => {
  const [userID, setuserID] = useState("");
  const [userPW, setuserPW] = useState("");

  const navigate = useNavigate();

  async function sendUserIDPW() {
    try {
      const response = await axios({
        url: "/api/members/login",
        method: "post",
        data: {
          email: userID,
          password: userPW,
        },
        withCredentials: true, //쿠키 전송
        baseURL: "http://localhost:8080",
      });

      let token =
        response.headers["Authorization"] || response.headers["authorization"];

      if (token) {
        console.log("로그인 성공");
        if (onLoginSuccess) {
          onLoginSuccess(token); //App.js로 토큰 전달해줌, 그러면 handleLoginSuccess함수에서 메인페이지로 리다이렉션 해줌
        } else {
          alert("onLoginSuccess is undefined");
        }
      } else {
        console.log("로그인 실패 : 토큰을 찾을 수 없음.");
        alert(response.data.message || "로그인 실패 : 토큰을 찾을 수 없음.");
      }
    } catch (error) {
      console.error("Error sending user info", error);
      alert("로그인 중 오류 발생. 다시 시도 바람");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("ID : ", userID);
    console.log("PW : ", userPW);
    sendUserIDPW(); //DB로 데이터 보냄(로그인 요청 보냄)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={[styles.backgroundMenu, className].join(" ")}>
        <div className={styles.backgroundMenuChild} />
        <div className={styles.credentials}>
          <input
            className={styles.unionIconID}
            placeholder="아이디"
            type="text"
            value={userID}
            onChange={(e) => setuserID(e.target.value)}
          ></input>
          <br></br>
          <input
            className={styles.unionIconPW}
            placeholder="비밀번호"
            type="password"
            value={userPW}
            onChange={(e) => setuserPW(e.target.value)}
          ></input>
        </div>
        <button type="submit" className={styles.loginAction}>
          <div className={styles.loginActionChild} />
          <b className={styles.b}>로그인</b>
        </button>
      </div>
    </form>
  );
};

BackgroundMenu.propTypes = {
  className: PropTypes.string,
};

export default BackgroundMenu;
