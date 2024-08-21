import PropTypes from "prop-types";
import styles from "./BackgroundMenu.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BackgroundMenu = ({ className = "" }) => {
  const [userID, setuserID] = useState("");
  const [userPW, setuserPW] = useState("");

  const navigate = useNavigate();

  async function sendUserIDPW() {
    try {
      const response = await axios({
        url: "/api/members/register",
        method: "post",
        data: {
          username: userID,
          password: userPW,
        },
        withCredentials: true, //쿠키 전송
        baseURL: "http://localhost:8080",
      });

      if (response.data) {
        console.log("로그인 성공");
        //로그인 성공 시, 메인페이지로 이동
        navigate("/welcome");
      } else {
        console.log("로그인 실패");
        alert(response.data.message);
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
    sendUserIDPW(); //DB로 데이터 보냄
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
