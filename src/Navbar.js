import React from "react";
import NavLinks from './NavLinks';
import logo from "./assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="/">
                    <img src={logo} className={styles.logo} alt="CommerceBear Logo" />
                </a>
            </div>
            <NavLinks />
            <a href="/">Get Started</a>
        </nav>
    );
};

export default Navbar;
