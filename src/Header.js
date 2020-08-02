import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.banner}>
      <div className={styles.content}>
        <Navbar />
        <h1>Multichannel ecommerce designed for furniture manufacturers.</h1>
      </div>
    </header>
  );
};

export default Header;
