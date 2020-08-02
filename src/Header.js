import React, { Component } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

// const Header = () => {
//   return (
//     <header className={styles.banner}>
//       <div className={styles.content}>
//         <AnnouncementBar />
//         <Navbar />
//         <div className={styles.headingContainer}>
//           <h1 className={`wrapper ${styles.h1}`}>
//             Multichannel ecommerce designed for furniture manufacturers.
//           </h1>
//         </div>
//       </div>
//     </header>
//   );
// };

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showAnnouncement: true,
    }
  }

  handleClick = () => {
    alert('you clicked me');
  }

  render() {
    console.log(this)
    return (
      <header className={styles.banner}>
        <div className={styles.content}>
          <AnnouncementBar close={this.handleClick} />
          <Navbar />
          <div className={styles.headingContainer}>
            <h1 className={`wrapper ${styles.h1}`}>
              Multichannel ecommerce designed for furniture manufacturers.
            </h1>
          </div>
        </div>
      </header>
    );
  }
}


export default Header;
