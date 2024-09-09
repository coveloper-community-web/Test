/**
 * 메인창에서 로그인하는 컴포넌트 UI
 */
import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./LoginMessage.module.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const LoginMessage = ({
  className = "",
  isLoggedIn,
  userInfo,
  onClickMyPosts,
}) => {
  const navigate = useNavigate();

  function handleLoginBtn() {
    navigate("/login");
  }

  function onClickLogout() {
    logout();
    alert("로그아웃 완료");
    navigate("/"); //메인페이지로 이동
    window.location.reload(); // 페이지 새로고침
  }

  let loginContent;

  console.log("isLoggedIn : ", isLoggedIn);

  if (isLoggedIn) {
    loginContent = (
      <div className={[styles.loginMessage, className].join(" ")}>
        <div className={styles.div} />
        <div className={styles.loginMessageParent}>
          <div className={styles.div1}>
            <p className={styles.p}>안녕하세요 {userInfo.nickname} 님!</p>
            <br></br>
            <p className={styles.p}>1트랙 : {userInfo.track1}</p>
            <p className={styles.p}>2트랙 : {userInfo.track2}</p>
          </div>
        </div>
        <div className={styles.logoutBtn} onClick={onClickLogout}>
          로그아웃
        </div>
        <div className={styles.whatIwrote} onClick={onClickMyPosts}>
          내가 쓴 글
        </div>
      </div>
    );
  } else {
    loginContent = (
      <div className={[styles.loginMessage, className].join(" ")}>
        <div className={styles.div} />
        <div className={styles.loginMessageParent}>
          <div className={styles.div1}>
            <p className={styles.p}>원활한 사용을 위해</p>
            <p className={styles.p}>로그인 후 이용 가능합니다.</p>
          </div>
        </div>
        <div className={styles.loginButtons}>
          <button className={styles.loginButton} onClick={handleLoginBtn}>
            <div className={styles.loginButtonBackground} />
            <div className={styles.div2}>로그인</div>
          </button>
        </div>
      </div>
    );
  }

  return <div>{loginContent}</div>;
};

LoginMessage.propTypes = {
  className: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  userInfo: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    track1: PropTypes.string.isRequired,
    track2: PropTypes.string.isRequired,
  }),
  onClickMyPosts: PropTypes.func.isRequired, // MyPosts 클릭 함수 추가
};

export default LoginMessage;
