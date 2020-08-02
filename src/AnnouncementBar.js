import React from "react";
import styles from "./AnnouncementBar.module.css";

const AnnouncementBar = (props) => {
    return (
      <div className={styles.container}>
        <span
          className={styles.closeAnnoucement}
          tabIndex="0"
          role="button"
          aria-label="Close Announcement"
          onClick={props.close}
        ></span>
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