import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import "../../App.css";
// import "./index.module.css";

class BuyButton extends React.Component {
  state = { open: false };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };
  renderModal() {
    const { open } = this.state;
    const { name } = this.props;
    return (
      <Modal isOpen={open} toggle={this.toggle} centered>
        <ModalBody>
          <div className="buycontainer">
            <h1>{name}</h1>
            <div className="buycontents">
              <p className="buytext pt-4 mr-2">INVEST</p>
              <input type="number" min="0" placeholder="0.0" />
              <p className="buytext pt-4 ml-2">ETH</p>
            </div>
          </div>
          <div className="my-4 row justify-content-center">
            <button className="font20 mx-3 btn btn-dark btn-large shadow rounded-pill px-4 py-2 ">
              Buy
            </button>{" "}
            <button
              className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 "
              onClick={this.toggle}
            >
              Cancel
            </button>
          </div>
        </ModalBody>
      </Modal>
    );
  }
  render() {
    return (
      <div>
        <button
          className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2"
          onClick={() => this.setState({ open: true })}
        >
          Buy Basket
        </button>
        {this.renderModal()}
      </div>
    );
  }
}

export default BuyButton;
