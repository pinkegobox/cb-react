import React from "react";
import styles from "./AnnouncementBar.module.css";

const AnnouncementBar = () => {
    return (
      <div className={styles.container}>
        <span
          className={styles.closeAnnoucement}
          tabindex="0"
          role="button"
          aria-label="Close Announcement"
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