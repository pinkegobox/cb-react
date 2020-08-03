import React, { Component } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Modal from "./Modal";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showBar: true,
      showModal: true,
    };
  }

  //checks if a value exists in isFirstVisit indicating whether the user has visited the page & interacted with the announcement bar before
  //if the user has, then update the state of isFirstVisit to false to prevent announcement bar from appearing again
  componentDidMount() {
    if (localStorage.getItem("showBar")) {
      this.setState({ showBar: false });
    }

    if (localStorage.getItem("showModal")) {
      this.setState({ showModal: false });
    } 
  }

  //once user clicks element, data about the user's visit is stored on their browser through localStorage
  handleModalClick = (e) => {
    console.log(e.target);
    this.setState({
      showModal: false,
    });
    localStorage.setItem("showModal", false);
  };

  handleBarClick = (e) => {
    console.log(e.target);
    this.setState({
      showBar: false,
    });
    localStorage.setItem("showBar", false);
  };

  render() {
    const { showModal, showBar } = this.state;

    const renderModal = showModal ? (
      <Modal close={this.handleModalClick} />
    ) : null;

    const renderBar = showBar ? (
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
