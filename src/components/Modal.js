import React, { Component } from "react";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {};
  }

  loopAddOns() {
    let { addOnsData } = this.props;

    return addOnsData.map((product, index) => {
      return (
        <div id={product.id} key={index} className={"product"}>
          <div className={"img"}>
            <img src={product.img} alt="special keywords" />
          </div>
          <div className={"productDetails"}>
            <p className={"productName"}>{product.productName}</p>
            <p className={"productId"}>{product.id}</p>
            <h5 className={"productPrice"}>${product.productPrice}</h5>
            <div className="addToCart">Add To Cart</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div
        id="modal"
        className={`${this.props.modalOpen === false ? "close" : "open"}`}
      >
        <div className="modalContainer">
          <div id="exit" onClick={this.props.onExitClicked}>
            X
          </div>
          <h3>
            <span className="modal-header">Want to add one of these?</span>
          </h3>
          <h4 className="modal-subheader">
            Customers who bought the <span className="mainItem">SPX300</span>{" "}
            also bought these popular items:
          </h4>
          <div id="addOns">{this.loopAddOns()}</div>
          <div className="addAllBtn">Add These 4 Items And Save 10%</div>
          <div className="footer">
            <span className="exit" onClick={this.props.onExitClicked}>
              No Thanks
            </span>
            <div className="checkOut">Continue to Checkout</div>
          </div>
        </div>
      </div>
    );
  }
}
