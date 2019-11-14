import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Button from 'react-bootstrap/Button';

import '../../App.css';
import web3 from '../../web3/web3';
import ETHMAXIMALIST_ABI from '../../web3/EthMaximalistABI';
import { ETHMAXIMALIST_CONTRACT_ADDRESS } from '../../web3/address';
import Loading from '../Loading';
import { registerEvent } from '../../api/googleAnalytics';
import { BUY_ZAP, INITIATE_PURCHASE } from '../../constants/googleAnalytics';

class ETHMAXIMALISTBuyButton extends React.Component {
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
    await this.setState({ gasValue: avgGasGwei });
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleSubmit = async event => {
    event.preventDefault();
    registerEvent({
      category: INITIATE_PURCHASE,
      action: this.props.name
    });
    await this.initialize();
    const networkId = await web3.eth.net.getId();
    const { value, account } = this.state;
    await this.getGas();
    if (networkId !== 1) {
      alert(
        'Sorry, you need to be on the Ethereum MainNet to use our services.'
      );
    } else {
      const contract = new web3.eth.Contract(
        ETHMAXIMALIST_ABI,
        ETHMAXIMALIST_CONTRACT_ADDRESS
      );
      const valueToInvest = value;
      this.setState({ showLoader: true });
      let tx;
      try {
        tx = await contract.methods
          .ETHMaximalistZAP()
          .send({
            from: account,
            value: web3.utils.toWei(valueToInvest, 'ether'),
            gas: 5000000,
            gasPrice: String(this.state.gasValue)
          })
          .on('receipt', receipt => {
            console.log(
              'the tx hash of the ETHMaximalistZAP function is',
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
        // eslint-disable-next-line no-console
        console.log(error);
      }
      // eslint-disable-next-line no-console
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
      // eslint-disable-next-line no-console
      console.error(error);
      this.setState({
        // eslint-disable-next-line react/no-unused-state
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
      <>
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
        {this.renderModal()}
      </>
    );
  }
}

export default ETHMAXIMALISTBuyButton;
