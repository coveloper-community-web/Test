import InputFields from "../components/InputFields";
import styles from "./Join.module.css";

const Join = () => {
  return (
    <div className={styles.join}>
      <div className={styles.joinInner}>
        <div className={styles.frameParent}>
          <div className={styles.coveloperParent}>
            <a className={styles.coveloper}>coveloper</a>
            <a className={styles.communityForDeveloper}>
              Community For Developer :
            </a>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div}>회원가입</div>
          </div>
        </div>
      </div>
        <InputFields />
    </div>
  );
};

export default Join;