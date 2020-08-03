import React from "react";
import styles from "../FeatureItem/FeatureItem.module.css";

const FeatureItem = (props) => {
    return (
      <li>
        <img src={props.img} alt={`${props.title} icon`} />
        <div className={styles.featuresDesc}>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </li>
    );
};

export default FeatureItem;
