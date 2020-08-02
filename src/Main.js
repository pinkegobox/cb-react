import React from "react";
import ecommerce from "./assets/ecommerce.png";
import Features from "./Features";
import Button from "./Button";
import styles from "./Main.module.css";

const Main = () => {
    return (
      <main className={`wrapper ${styles.mainContainer}`}>
        <div className={styles.desc}>
          <h2 className={styles.h2}>
            Generate new revenue, profits, and establish an effective
            omni-channelbusiness.
          </h2>
          <h2>Over 53,720 furniture SKUs published.</h2>
        </div>
        <img src={ecommerce} alt="" />
        <h2>Designed to drive sales and automate operations.</h2>
        <Features />
        <hr />
        <div className={styles.learnMore}>
          <h2>
            From start to scale, say hello to your next chapter of growth.
          </h2>
          <Button text="Talk to us to learn more" padding="2rem 3rem" />
        </div>
      </main>
    );
};

export default Main;
