import React, { Component } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Modal from "./Modal";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isBarVisible: true,
      isModalVisible: true,
    };
  }

  //checks if a value exists in isBarVisible and/or isModalVisible indicating whether the user has visited the page & interacted with the bar and modal before
  //if the user has, then update the state of isBarVisible and/or isModalVisible to false to prevent announcement bar & modal from appearing again
  componentDidMount() {
    if (localStorage.getItem("isBarVisible")) {
      this.setState({ isBarVisible: false });
    }

    if (localStorage.getItem("isModalVisible")) {
      this.setState({ isModalVisible: false });
    }
  }

  //once user clicks element, data about the user's visit is stored on their browser through localStorage
  handleModalClick = () => {
    this.setState({
      isModalVisible: false,
    });
    localStorage.setItem("isModalVisible", false);
  };

  handleBarClick = () => {
    this.setState({
      isBarVisible: false,
    });
    localStorage.setItem("isBarVisible", false);
  };

  render() {
    const { isModalVisible, isBarVisible } = this.state;

    const renderModal = isModalVisible ? (
      <Modal close={this.handleModalClick} />
    ) : null;

    const renderBar = isBarVisible ? (
      <AnnouncementBar close={this.handleBarClick} />
    ) : null;

    return (
      <header className={styles.banner}>
        <div className={styles.content}>
          {renderModal}
          {renderBar}
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
