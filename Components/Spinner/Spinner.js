import React, { Fragment } from "react";
import styles from "./Spinner.module.css";

export default function LoadingSpinner(props) {
  return (
    <Fragment>
      <div className={styles.backdrop}></div>
      <div className={styles.spinnerContainer}>
        <div className={styles.loadingSpinner}>
        </div>
      </div>
    </Fragment>
  );
}
