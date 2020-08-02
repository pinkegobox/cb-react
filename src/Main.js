import React from "react";
import ecommerce from "./assets/ecommerce.png";
import multichannel from "./assets/multichannel.jpeg";
import autoPromotions from "./assets/automated-promotions.png";
import channelSetup from "./assets/channel-setup.png";
import inventoryApp from "./assets/inventory-app.png";
import supportPlus from "./assets/support-plus.png";
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
        <ul className={styles.featuresList}>
          <li>
            <img src={multichannel} alt="" />
            <h3>Multi Channel Publishing</h3>
            <p>
              Fully built-out product data and content deployed to all channels
            </p>
          </li>
          <li>
            <img src={autoPromotions} alt="" />
            <h3>Automated Promotions</h3>
            <p>
              Full setup and optimization of unpaid promotions across all
              channels
            </p>
          </li>
          <li>
            <img src={channelSetup} alt="" />
            <h3>Channel Setup</h3>
            <p>Channel Setup</p>
          </li>
          <li>
            <img src={inventoryApp} alt="" />
            <h3>Inventory App</h3>
            <p>Automated multi-marketplace inventory management</p>
          </li>
          <li>
              <img src={supportPlus} alt=""/>
            <h3>Support Plus</h3>
            <p>
              Troubleshooting, insight, and best practices to help you scale
            </p>
          </li>
        </ul>
        <hr />
        <h2>From start to scale, say hello to your next chapter of growth.</h2>
        <a href="/">Talk to us to learn more</a>
      </main>
    );
};

export default Main;
