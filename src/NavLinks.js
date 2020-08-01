import React from 'react';
import styles from './NavLinks.module.css';

const NavLinks = () => {
    return (
        <ul className={`${styles.list} ${styles.fontColor}`}>
            <li>Solutions</li>
            <li>Why Bear?</li>
            <li>About</li>
            <li>Pricing</li>
            <li>FAQ</li>
        </ul>
    );
};

export default NavLinks;
