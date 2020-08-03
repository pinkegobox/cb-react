import React from "react";
import multichannel from "../assets/multichannel.jpeg";
import autoPromotions from "../assets/automated-promotions.png";
import channelSetup from "../assets/channel-setup.png";
import inventoryApp from "../assets/inventory-app.png";
import supportPlus from "../assets/support-plus.png";
import FeatureItem from "../FeatureItem/FeatureItem";
import styles from "../Features/Features.module.css";

const Features = () => {
    return (
      <ul className={styles.featuresList}>
        <FeatureItem
          img={multichannel}
          title={"Multi Channel Publishing"}
          desc={
            "Fully built-out product data and content deployed to all channels"
          }
        />
        <FeatureItem
          img={inventoryApp}
          title={"Inventory App"}
          desc={"Automated multi-marketplace inventory management"}
        />
        <FeatureItem
          img={autoPromotions}
          title={"Automated Promotions"}
          desc={
            "Full setup and optimization of unpaid promotions across all channels"
          }
        />
        <FeatureItem
          img={supportPlus}
          title={"Support Plus"}
          desc={
            "Troubleshooting, insight, and best practices to help you scale"
          }
        />
        <FeatureItem 
          img={channelSetup} 
          title={"Channel Setup"} 
          desc={"Streamlined marketplace onboarding"} 
        />
      </ul>
    );
};

export default Features;