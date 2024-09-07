/*
 * 로그인 하는 페이지
 */
import BackgroundMenu from "../components/BackgroundMenu";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  //회원가입 페이지로 이동
  function handleSignupClick() {
    console.log("sign up");
    navigate("/join");
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginInner}>
        <div className={styles.coveloperParent}>
          <a className={styles.coveloper}>coveloper</a>
          <a className={styles.communityForDeveloper}>
            Community For Developer :
          </a>
        </div>
      </div>
      <BackgroundMenu onLoginSuccess={onLoginSuccess} />
      <div className={styles.accountOptions}>
        <div className={styles.signup} onClick={handleSignupClick}>
          회원가입
        </div>
      </div>
    </div>
  );
};

export default Login;
