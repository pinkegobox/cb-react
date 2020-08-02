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
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          <FontAwesomeIcon icon={faInstagram} size="lg" />
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </div>
        <div>
          <p>
            <a href="/">Click here</a> to join our growing industry following and
            stay up to date with all things CommerceBear.
          </p>
          <p>© 2020 CommerceBear. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
