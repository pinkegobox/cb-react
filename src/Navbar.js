import React from "react";
import NavLinks from './NavLinks';
import logo from "./assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
      <nav className={styles.flexContainer}>
        <div>
          <a href="/">
            <img src={logo} className={styles.logo} alt="CommerceBear Logo" />
          </a>
        </div>
        <div className={styles.flexContainer}>
          <NavLinks />
          <a href="/">Get Started</a>
        </div>
      </nav>
    );
};

export default Navbar;
