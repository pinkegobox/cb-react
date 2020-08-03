import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <a href={props.path} className={styles.button} style={{padding: props.padding}}>
      {props.text}
    </a>
  );
};

export default Button;
