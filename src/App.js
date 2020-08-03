import React, { Component } from 'react';
import Modal from "./Modal/Modal";
import AnnouncementBar from "./AnnouncementBar/AnnouncementBar";
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
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
      <div className="App">
        {renderModal}
        {renderBar}
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
