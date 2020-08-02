import React from "react";
import NavLinks from './NavLinks';
import Button from './Button';
import logo from "./assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
      <nav className={`${styles.flexContainer} ${styles.padding}`}>
        <div>
          <a href="/">
            <img src={logo} className={styles.logo} alt="CommerceBear Logo" />
          </a>
        </div>
        <div className={`${styles.flexContainer} ${styles.bold}`}>
          <NavLinks />
          <Button text="Get Started" padding="1.5rem 2rem" />
        </div>
      </nav>
    );
};

export default Navbar;
