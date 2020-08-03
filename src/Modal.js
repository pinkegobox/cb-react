import React from "react";
import CloseButton from "./CloseButton";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.container}>
      <CloseButton close={props.close} />
      <h2 className={styles.h2}>Don't miss a thing.</h2>
      <p className={styles.desc}>
        Sign up for our mailing list and get industry updates, live events, and
        great analysis.
      </p>
      <form action="#" className={styles.form}>
        <input type="text" placeholder="Email Address" />
        <input type="button" value="Sign Up" />
      </form>
      <p className={styles.formDisclaimer}>We respect your privacy.</p>
    </div>
  );
};

export default Modal;