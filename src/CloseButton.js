import React from "react";
import styles from "./CloseButton.module.css";

const CloseButton = (props) => {
    return (
      <span
        className={styles.closeAnnoucement}
        tabIndex="0"
        role="button"
        aria-label="Close Announcement"
        onClick={props.close}
      ></span>
    );
};

export default CloseButton;