const AVAILABLE_ZAPS = {
  ETHMaximalist: {
    id: "ETHMaximalist",
    name: "ETH Maximalist",
    isOrderable: true,
    color: "",
    components: [{
      name: "dLETH2x",
      percent: 50
    }, {
      name: "dsWBTC",
      percent: 50
    }]
  },
  lender: {
    id: "lender",
    name: "Lender",
    isOrderable: true,
    components: [
      {
        name: "cDai",
        percent: 90
      },
      {
        name: "dLETH2x",
        percent: 10
      }
    ]
  },
};

export default AVAILABLE_ZAPS;