import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Button from 'react-bootstrap/Button';

import '../../App.css';
import web3 from '../../web3/web3';
import Loading from '../Loading';
import contractProvider from '../../utils/web3DataProvider';
import { registerEvent } from '../../api/googleAnalytics';
import { BUY_ZAP, INITIATE_PURCHASE } from '../../constants/googleAnalytics';

class LenderBuyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: '',
      account: null,
      showLoader: false,
      errorMessage: '',
      depositTxHash: ''
    };
  }

  async getGas() {
    const res = await fetch('https://ethgasstation.info/json/ethgasAPI.json');
    const response = await res.json();
    const avgGasGwei = (response.average / 10) * 1000000000;
    console.log(`the Gas from the gas module2 is ${avgGasGwei}`);
    this.setState({ gasValue: avgGasGwei });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleSubmit = async event => {
    event.preventDefault();
    registerEvent({
      category: INITIATE_PURCHASE,
      action: this.props.name
    });
    await this.initialize();
    const networkId = await web3.eth.net.getId();
    await this.getGas();
    if (networkId !== 1) {
      alert(
        'Sorry, you need to be on the Ethereum MainNet to use our services.'
      );
    } else {
      const { contractAbi, contractAddress } = contractProvider(
        this.props.name
      );
      const valueToInvest = this.state.value;
      const contract = new web3.eth.Contract(contractAbi, contractAddress);
      this.setState({ showLoader: true });
      let tx;
      try {
        tx = await contract.methods
          .SafeNotSorryZapInvestment()
          .send({
            from: this.state.account,
            value: web3.utils.toWei(valueToInvest, 'ether'),
            gas: 5000000,
            gasPrice: String(this.state.gasValue)
          })
          .on('receipt', receipt => {
            console.log(
              'the tx hash of the sendInvestment function is',
              receipt.transactionHash
            );
            this.setState({
              depositTxHash: receipt.transactionHash,
              showLoader: false
            });
          })
          .on('error', error => {
            alert(
              'Sorry, we encountered an error, please try again or reach out to us if this persists.'
            );
            this.setState({ showLoader: false });
          });
      } catch (error) {
        console.log(error);
      }
      console.log(tx);
    }
  };

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
          'Error connecting to MetaMask! Please try reloading the page...'
      });
    }
  }

  renderModal() {
    const { open, value } = this.state;
    const { name } = this.props;
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
                  value={value}
                  onChange={this.handleChange}
                  placeholder="0.0"
                  required
                  style={
                    value && value.length > 3
                      ? {
                          width: `${70 + value.length * 10}px`
                        }
                      : {}
                  }
                />
                <p className="buytext pt-4 ml-2">ETH</p>
              </div>
            </div>
            <div className="my-4 row justify-content-center">
              <input
                type="submit"
                className="font20 mx-3 btn btn-dark btn-large shadow px-4 py-2 "
                value="Buy"
              />
              <div
                className="font20 btn btn-outline-dark btn-large shadow px-4 py-2 "
                onClick={this.toggle}
              >
                Cancel
              </div>
              {this.state.showLoader ? <Loading /> : null}
            </div>
          </form>
        </ModalBody>
      </Modal>
    );
  }

  render() {
    const { isOrderable, name } = this.props;
    return (
      <div>
        {isOrderable ? (
          <Button
            onClick={() => {
              this.setState({ open: true });
              registerEvent({
                category: BUY_ZAP,
                action: name
              });
            }}
            disabled={!isOrderable}
            variant="outline-success"
            size="lg"
            className="m-2"
          >
            Buy
          </Button>
        ) : (
          <Button
            onClick={() => this.setState({ open: true })}
            disabled={!isOrderable}
            variant="outline-success"
            size="lg"
            className="m-2"
          >
            Coming Soon
          </Button>
        )}
        {this.renderModal()}
      </div>
    );
  }
}

export default LenderBuyButton;
