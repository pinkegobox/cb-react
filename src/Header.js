import React from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.banner}>
      <AnnouncementBar />
      <div className={styles.content}>
        <Navbar />
        <div className={styles.headingContainer}>
          <h1 className={`wrapper ${styles.h1}`}>
            Multichannel ecommerce designed for furniture manufacturers.
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
