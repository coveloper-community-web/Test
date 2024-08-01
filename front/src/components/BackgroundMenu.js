import PropTypes from "prop-types";
import styles from "./BackgroundMenu.module.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const BackgroundMenu = ({ className = "" }) => {
  const [userID, setuserID] = useState("");
  const [userPW, setuserPW] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("ID : ", userID);
    console.log("PW : ", userPW);
    //여기서 DB로 데이터 보내고 비교 등, 나머지 처리함
    //로그인 성공하면

    navigate("/welcome"); //이동
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
            onChange={(e) => setuserID(e.target.value)}>
          </input>
          <br></br>
          <input
            className={styles.unionIconPW}
            placeholder="비밀번호"
            type="password"
            value={userPW}
            onChange={(e) => setuserPW(e.target.value)}>
          </input>
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
