import React from "react";
import NavLinks from "./NavLinks";
import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className="wrapper">
        <NavLinks />
        <div className={styles.contact}>
          <p>hello@commercebear.com</p>
          <p>Canada +1 647 479 6243</p>
          <p>USA +1 929 232 2327</p>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="http://linkedin.com/company/commercebear"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="This is an external link (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="md" />
          </a>
          <a
            href="https://www.instagram.com/commercebear/"
            rel="noopener noreferrer"
            aria-label="This is an external link (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faInstagram} size="md" />
          </a>
          <a
            href="https://twitter.com/commercebear"
            rel="noopener noreferrer"
            aria-label="This is an external link (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faTwitter} size="md" />
          </a>
        </div>
        <p className={styles.mailUpdates}>
          <a href="/">Click here</a> to join our growing industry following and
          stay up to date with all things CommerceBear.
        </p>
        <p>© 2020 CommerceBear. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
