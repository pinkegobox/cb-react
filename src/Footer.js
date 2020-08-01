import React from "react";
import NavLinks from "./NavLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <NavLinks />
      <div>
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        <FontAwesomeIcon icon={faInstagram} size="lg" />
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </div>
    </footer>
  );
};

export default Footer;
