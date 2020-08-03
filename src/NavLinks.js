import React from 'react';
import styles from './NavLinks.module.css';

const NavLinks = () => {
    return (
      <ul className={styles.list}>
        <li>
          <a href="https://commercebear.com/publishing">Solutions</a>
        </li>
        <li>
          <a href="https://commercebear.com/whybear">Why Bear?</a>
        </li>
        <li>
          <a href="https://commercebear.com/whoweare">About</a>
        </li>
        <li>
          <a href="https://commercebear.com/pricing">Pricing</a>
        </li>
        <li>
          <a href="https://commercebear.com/faq">FAQ</a>
        </li>
      </ul>
    );
};

export default NavLinks;
