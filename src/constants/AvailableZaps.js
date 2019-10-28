const AVAILABLE_ZAPS = {
  bullSharpe: {
    name: "Conservative Bull",
    isOrderable: false,
    color: "",
    components: [
      {
        name: "cDai",
        percent: 70
      },
      {
        name: "ETHMINVOL",
        percent: 30
      }
    ]
  },
  lender: {
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
  bearSharpe: {
    name: "Conservative Bear",
    isOrderable: false,
    components: [
      {
        name: "cDai",
        percent: 65
      },
      {
        name: "dSETH1x",
        percent: 35
      }
    ]
  }
};

export default AVAILABLE_ZAPS;