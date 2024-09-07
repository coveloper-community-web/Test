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
      <div className={styles.headerDividerWrapper}>
        <textarea className={styles.headerDivider} rows={7} cols={36} />
      </div>
      <div className={styles.navbarItemsContainer}>
        <textarea className={styles.navbarItems4} rows={15} cols={18} />
        <textarea className={styles.navbarItems4} rows={15} cols={18} />
      </div>
      <textarea className={styles.frameChild} rows={17} cols={36} />
    </div>
  );
}

export default HomeContent;
