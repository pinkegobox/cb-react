import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "../Header/Header.module.css";

const Header = () => {
   return (
     <header className={styles.banner}>
       <div className={styles.content}>
         <Navbar />
         <div className={styles.container}>
           <h1 className={`wrapper ${styles.h1}`}>
             Multichannel ecommerce designed for furniture manufacturers.
           </h1>
         </div>
       </div>
     </header>
   );
}

export default Header;
