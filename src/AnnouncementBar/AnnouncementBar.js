import React from "react";
import CloseButton from "../CloseButton/CloseButton";
import styles from "../AnnouncementBar/AnnouncementBar.module.css";

const AnnouncementBar = (props) => {
    return (
      <div className={styles.container}>
        <CloseButton close={props.close} />
        <p>
          <span role="img" aria-label="confetti emoji">
            🎉
          </span>
          See us in the press: Furniture Today, Business of Home, and Casual
          Living
        </p>
      </div>
    );
}

export default AnnouncementBar;