import React from "react";
import NavLinks from './NavLinks';
import logo from "./assets/logo.png";

const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="/">
                    <img src={logo} alt="CommerceBear Logo" />
                </a>
            </div>
            <NavLinks />
            <a href="/">Get Started</a>
        </nav>
    );
};

export default Navbar;
