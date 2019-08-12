import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal";
import addOnsData from "./data/addOnsData.js";
import "./scss/style.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      addOnsData
    };

    this.onCheckOutClicked = this.onCheckOutClicked.bind(this);
  }

  onCheckOutClicked = () => {
    this.setState({
      modalOpen: true
    });
  };

  onExitClicked = () => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    return (
      <div id="appContent">
        <h1>Checkout Page</h1>
        <div className="checkoutBtn" onClick={this.onCheckOutClicked}>
          Check Out
        </div>{" "}
        <Modal
          onExitClicked={this.onExitClicked}
          addOnsData={this.state.addOnsData}
          modalOpen={this.state.modalOpen}
        />
      </div>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
