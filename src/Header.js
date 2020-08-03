import React, { Component } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isFirstVisit: true,
    };
  }

  //checks if a value exists in isFirstVisit indicating whether the user has visited the page & interacted with the announcement bar before
  //if the user has, then update the state of isFirstVisit to false to prevent announcement bar from appearing again
  componentDidMount() {
    if (localStorage.getItem("isFirstVisit")) {
      this.setState({ isFirstVisit: false });
    }
  }

  //once user clicks element, data about the user's visit is stored on their browser through localStorage
  handleClick = () => {
    this.setState({
      isFirstVisit: false,
    });
    localStorage.setItem("isFirstVisit", false);
  };

  render() {
    return (
      <header className={styles.banner}>
        <div className={styles.content}>
          {this.state.isFirstVisit ? (
            <AnnouncementBar close={this.handleClick} />
          ) : null}
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
