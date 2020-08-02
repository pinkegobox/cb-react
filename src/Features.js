import React from "react";
import multichannel from "./assets/multichannel.jpeg";
import autoPromotions from "./assets/automated-promotions.png";
import channelSetup from "./assets/channel-setup.png";
import inventoryApp from "./assets/inventory-app.png";
import supportPlus from "./assets/support-plus.png";
import styles from "./Features.module.css";

const Features = () => {
    return (
      <ul className={styles.featuresList}>
        <li>
          <img src={multichannel} alt="" />
          <div className={styles.featuresDesc}>
            <h3>Multi Channel Publishing</h3>
            <p>
              Fully built-out product data and content deployed to all channels
            </p>
          </div>
        </li>
        <li>
          <img src={inventoryApp} alt="" />
          <div className={styles.featuresDesc}>
            <h3>Inventory App</h3>
            <p>Automated multi-marketplace inventory management</p>
          </div>
        </li>
        <li>
          <img src={autoPromotions} alt="" />
          <div className={styles.featuresDesc}>
            <h3>Automated Promotions</h3>
            <p>
              Full setup and optimization of unpaid promotions across all
              channels
            </p>
          </div>
        </li>
        <li>
          <img src={supportPlus} alt="" />
          <div className={styles.featuresDesc}>
            <h3>Support Plus</h3>
            <p>
              Troubleshooting, insight, and best practices to help you scale
            </p>
          </div>
        </li>
        <li>
          <img src={channelSetup} alt="" />
          <div className={styles.featuresDesc}>
            <h3>Channel Setup</h3>
            <p>Streamlined marketplace onboarding</p>
          </div>
        </li>
      </ul>
    );
};

export default Features;