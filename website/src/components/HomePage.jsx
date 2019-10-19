import React, { PureComponent } from 'react';
import autobind from 'react-autobind';
import Web3 from 'web3';

let web3; //Instance of web3 that we shall use everywhere.

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      publicAddress: undefined,
    };
    autobind(this);
  }

  handleClick = async () => {
    this.setState({ loading: true });
    // Check if MetaMask is installed
    if (!window.ethereum) {
      window.alert('Please install MetaMask first.');
      return;
    }
    if (!web3) {
      try {
        // Request account access if needed.
        await window.ethereum.enable();
        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        web3 = new Web3(window.ethereum);
        this.setState({ loading: false, loggedIn: true });
      } catch (error) {
        window.alert('You need to allow MetaMask.');
        return;
      }
    } else {
      this.setState({ loading: false });
    }

    const coinbase = await web3.eth.getCoinbase();
    if (!coinbase) {
      window.alert('Please activate MetaMask first.');
      return;
    }

    const publicAddress = coinbase.toLowerCase();
    this.setState({ publicAddress });
  };

  render() {
    const { loading, loggedIn, publicAddress } = this.state;

    return (
      <>
      {
          loggedIn ? null :
            (<>
              <h3>Welcome to Aggressive ETH Savings</h3>
              <h3>Let's go save some cryptos and get rich!</h3>
              <h4>Would you like to sign up?</h4>
            </>)
        }
        <button className="Login-button Login-mm" onClick={this.handleClick}>
          {loading ? 'Loading...' : 'Login with MetaMask'}
        </button>
        <br />
        {
          loggedIn ? 
            (<>
              <h3>Welcome to Aggressive ETH Savings</h3>
              <h4>Your current publicAddress is {publicAddress}</h4>
            </>)
            : null
        }
      </>
    );
  }
}

export default HomePage;