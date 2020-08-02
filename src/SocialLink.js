import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLink = (props) => {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="This is an external link (opens in a new tab)"
      >
        <FontAwesomeIcon icon={props.icon} size="md" />
      </a>
    );
};

export default SocialLink;