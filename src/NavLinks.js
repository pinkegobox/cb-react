import React from 'react';
import styles from './NavLinks.module.css';

const NavLinks = () => {
    return (
      <ul className={styles.list}>
        <li>
          <a href="/">Solutions</a>
        </li>
        <li>
          <a href="/">Why Bear?</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
            <a href="/">FAQ</a>
        </li>
      </ul>
    );
};

export default NavLinks;
