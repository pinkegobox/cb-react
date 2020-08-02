import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <a href="/" className={styles.button}>
      {props.text}
    </a>
  );
};

export default Button;
