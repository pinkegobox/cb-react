import React from "react";
import CloseButton from "./CloseButton";
import styles from "./AnnouncementBar.module.css";

const AnnouncementBar = (props) => {
    return (
      <div className={styles.container}>
        <CloseButton close={props.close} />
        <p>
          <span role="img" aria-label="confetti emoji">
            🎉
          </span>
          See us in the press: Furniture Today, Business of Home, and Causal
          Living
        </p>
      </div>
    );
}

export default AnnouncementBar;