import React from "react";
import CloseButton from "./CloseButton";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.container}>
      {/* <span
        className={styles.closeAnnoucement}
        tabIndex="0"
        role="button"
        aria-label="Close Announcement"
      ></span> */}
      <CloseButton close={props.close} />
      <h2>Don't miss a thing.</h2>
      <p>
        Sign up for our mailing list and get industry updates, live events, and
        great analysis.
      </p>
      <form action="#">
        <input type="text" placeholder="Email Address" />
        <input type="button" value="Sign Up" />
      </form>
      <p>We respect your privacy.</p>
    </div>
  );
};


export default Modal;