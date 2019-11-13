const path = require("path");
// const HDWalletProvider = require('truffle-hdwallet-provider');
// var mnemonic = "TO INSERT";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, '../src/web3/abi'),
  networks: {
    // develop: {
    //   port: 8545
    // },
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    // rinkeby: {
    //   provider: function () {
    //     return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/[infuraKey to be inserted]");
    //   },
    //   network_id: 4,
    //   gas: 4500000,
    //   gasPrice: 10000000000,
    // },
  }
};
