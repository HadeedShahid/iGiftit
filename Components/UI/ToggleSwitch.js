import React from "react";
import styles from "./ToggleSwitch.module.css";
  
const ToggleSwitch = (props) => {
    return (
        <div className={styles.togglecontainer} onClick={props.handleToggleChange}>
          <div className={`${styles.togglebtn} ${!props.toggle ? `${styles.disable}` : ""}`}>
            {/* {props.toggle ? "ON" : "OFF"} */}
          </div>
        </div>
      );
};

export default ToggleSwitch;