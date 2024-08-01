import PropTypes from "prop-types";
import {useState} from "react";
import styles from "./InputFields.module.css";
import styles_join from "../pages/Join.module.css";

const InputFields = ({ className = "" }) => {
  const [userID, setuserID] = useState("");
  const [userPW1, setuserPW1] = useState("");
  const [userPW2, setuserPW2] = useState("");
  const [userNickName, setuserNickName] = useState("");
  const [userName, setuserName] = useState("");
  const [userTrack1, setuserTrack1] = useState("");
  const [userTrack2, setuserTrack2] = useState("");

  function handleUserInfo(event) {
    //여기서 백엔드로 사용자 정보 보내서 회원가입함
    event.preventDefault();
    console.log(userID);
    console.log(userPW1);
    console.log(userPW2);
    console.log(userNickName);
    console.log(userName);
    console.log(userTrack1);
    console.log(userTrack2);
  }

  //비밀번호 2차 체크 함수
  function checkPassWord() {
    const password2Field = document.querySelector("#userPW");
    const existingIcon = document.querySelector("#userPW span");

    if(existingIcon) {
      existingIcon.remove();
    }

    if(userPW1.trim() !== "" || userPW2.trim() !== "") {
      const span = document.createElement("span");

      if(userPW1 === userPW2) {
        console.log("password is good");
        password2Field.innerText = "비밀번호 🟢";
      }
      else {
        console.log("pw1, pw2 are diff");
        password2Field.innerText = "비밀번호 🔴";
      }
    }
  }

  //유저 아이디 디비에 있는 아이디인지 확인 함수
  function checkUserID() {
    const userID = document.querySelector("#userID");
    const existingIcon = document.querySelector("#userID span");

    if(existingIcon) {
      existingIcon.remove();
    }

    //만약 DB에서 비교했을때
    //동일한 아이디가 발생하는지? 동일한 아이디가 없는지? 확인하고
    //"아이디 🟢" 이런식으로 표시
  }

  return (
    <form onSubmit={handleUserInfo} className={styles_join.infoInput}>
      <div className={[styles.inputFields, className].join(" ")}>

        <div className={styles.inputContainer}>
          <div className={styles.credentials}>
            <div id="userID"className={styles.div}>아이디</div>
            <div id="userPW"className={styles.div1}>비밀번호</div>
            <div className={styles.div2}>비밀번호 확인</div>
            <div className={styles.div3}>닉네임</div>
            <div className={styles.nameInput}>
              <div className={styles.div4}>이름</div>
            </div>
            <div className={styles.inputLabels}>
              <div className={styles.div5}>트랙 1</div>
            </div>
            <div className={styles.inputLabels1}>
              <div className={styles.div6}>트랙 2</div>
            </div>
          </div>
        </div>
        
        <div className={styles.rectangleParent}>
          <input className={styles.frameChild} type="text" onBlur={checkUserID} value={userID} onChange={(e) => setuserID(e.target.value)}/>
          <input className={styles.frameItem} type="password" value={userPW1} onChange={(e) => setuserPW1(e.target.value)}/>
            <input className={styles.frameInner} type="password" onBlur={checkPassWord} value={userPW2} onChange={(e) => setuserPW2(e.target.value)}/>
          <input className={styles.rectangleInput} type="text" value={userNickName} onChange={(e) => setuserNickName(e.target.value)}/>
          <div className={styles.rectangleWrapper}>
            <input className={styles.frameChild1} type="text" value={userName} onChange={(e) => setuserName(e.target.value)}/>
          </div>
          <div className={styles.rectangleContainer}>
            <select className={styles.frameChild2} value={userTrack1} onChange={(e) => setuserTrack1(e.target.value)}>
              <option>트랙 1 선택</option>
              <option value="웹">웹</option>
              <option value="모바일소프트웨어">모바일소프트웨어</option>
              <option value="빅데이터">빅데이터</option>
              <option value="디지털 콘텐츠, 가상현실">디지털 콘텐츠, 가상현실</option>
            </select>
          </div>
          <div className={styles.rectangleFrame}>
            <select className={styles.frameChild3} value={userTrack2} onChange={(e) => setuserTrack2(e.target.value)}>
              <option value="">트랙 2 선택</option>
              <option value="웹">웹</option>
              <option value="모바일소프트웨어">모바일소프트웨어</option>
              <option value="빅데이터">빅데이터</option>
              <option value="디지털 콘텐츠, 가상현실">디지털 콘텐츠, 가상현실</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" className={styles_join.rectangleParent}>
            CREATE
      </button>

    </form>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
