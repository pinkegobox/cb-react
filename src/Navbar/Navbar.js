import React from "react";
import NavLinks from '../NavLinks/NavLinks';
import Button from '../Button/Button';
import logo from "../assets/logo.png";
import styles from "../Navbar/Navbar.module.css";

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
          <Button text="Get Started" padding="1.5rem 2rem" path="https://commercebear.com/getstarted"/>
        </div>
      </nav>
    );
};

export default Navbar;
