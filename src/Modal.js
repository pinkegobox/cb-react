import React from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.container}>
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