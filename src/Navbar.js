import React from "react";
import logo from "./assets/logo.png";

const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="/">
                    <img src={logo} alt="CommerceBear Logo" />
                </a>
            </div>
            <ul>
                <li>Solutions</li>
                <li>Why Bear?</li>
                <li>About</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>
                    <a href="/">Get Started</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
