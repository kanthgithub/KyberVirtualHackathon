import React from "react";
import { Modal, ModalBody } from "reactstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import "../../App.css";
import web3 from "../../web3/web3";
import { CONTRACT_ABI } from "../../web3/abi";
import { CONTRACT_ADDRESS_KOVAN } from "../../web3/address";
import Loading from "../Loading";

class BuyButton extends React.Component {
  state = { open: false, value: null, account: null, showLoader: false };
  componentDidMount() {
    this.initialize();
  }

  async initialize() {
    try {
      const [account] = await window.ethereum.enable();

      this.setState({
        account
      });
    } catch (error) {
      console.error(error);
      this.setState({
        errorMessage:
          "Error connecting to MetaMask! Please try reloading the page..."
      });
    }
    const getGas = async () => {
      const res = await fetch("https://ethgasstation.info/json/ethgasAPI.json");
      let response = await res.json();
      let avgGasGwei = (response.average / 10) * 1000000000;
      console.log("the Gas from the gas module2 is " + avgGasGwei);
      this.setState({ gasValue: avgGasGwei });
    };

    getGas();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const valueToInvest = this.state.value;
    const contract = new web3.eth.Contract(
      CONTRACT_ABI,
      CONTRACT_ADDRESS_KOVAN
    );
    this.setState({ showLoader: true });
    const tx = await contract.methods
      .SafeNotSorryZapInvestment()
      .send({
        from: this.state.account,
        value: web3.utils.toWei(valueToInvest, "ether"),
        gas: 4500000,
        gasPrice: String(this.state.gasValue)
      })
      .on("receipt", receipt => {
        console.log(
          "the tx hash of the SafeNotSorryZapInvestment function is",
          receipt["transactionHash"]
        );
        this.setState({
          depositTxHash: receipt["transactionHash"],
          showLoader: false
        });
      })
      .on("error", error => {
        alert(error);
        this.setState({ showLoader: false });
      });
    console.log(tx);
    // this.toggle();
  };

  renderModal() {
    const { open } = this.state;
    const { name, isOrderable } = this.props;
    return (
      <Modal isOpen={open} toggle={this.toggle} centered>
        <ModalBody>
          <form onSubmit={this.handleSubmit}>
            <div className="buycontainer">
              <h1>{name}</h1>
              <div className="buycontents">
                <p className="buytext pt-4 mr-2">INVEST</p>
                <input
                  min="0"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="0.0"
                />
                <p className="buytext pt-4 ml-2">ETH</p>
              </div>
            </div>
            <div className="my-4 row justify-content-center">
              <input
                type="submit"
                className="font20 mx-3 btn btn-dark btn-large shadow rounded-pill px-4 py-2 "
                value="Buy"
              />
              <button
                className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 "
                onClick={this.toggle}
              >
                Cancel
              </button>
              {this.state.showLoader ? <Loading /> : null}
            </div>
          <div className="my-4 row justify-content-center">
          {
            isOrderable ? (
              <button className="font20 mx-3 btn btn-dark btn-large shadow rounded-pill px-4 py-2 ">
                Buy
              </button>
              ) : (
                <OverlayTrigger
                  placement="top"
                  key="top"
                  overlay={
                    <Tooltip>
                      Coming soon
                    </Tooltip>
                  }
                >
                <button className="font20 mx-3 btn btn-dark btn-large shadow rounded-pill px-4 py-2 ">
                  Buy
                </button>
                </OverlayTrigger>
              )
          }
            {" "}
            <button
              className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2 "
              onClick={this.toggle}
            >
              Cancel
            </button>
          </div>
          </form>
        </ModalBody>
      </Modal>
    );
  }
  render() {
    const { isOrderable } = this.props;
    return (
      <div>
        <button
          className="font20 btn btn-outline-dark btn-large shadow rounded-pill px-4 py-2"
          onClick={() => this.setState({ open: true })}
        >
          {isOrderable? 'Buy': 'Coming Soon'}
        </button>
        {this.renderModal()}
      </div>
    );
  }
}

export default BuyButton;
