import React from "react";
import styles from "./Main2.module.css";

function HomeContent() {
  return (
    <div className={styles.navbarItemsGroup}>
      <div className={styles.navbarItems3}>
        <div className={styles.rectangleDiv} />
        <i className={styles.communityForDeveloper1}>
          Community For Developer :
        </i>
        <div className={styles.coveloperContainer}>
          <h1 className={styles.coveloper1}>coveloper</h1>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
