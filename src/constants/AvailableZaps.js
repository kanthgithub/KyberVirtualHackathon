export const AVAILABLE_ZAPS = {
  bullSharpe: {
    name: "Bull Sharpe",
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
        name: "2xLONG-ETH",
        percent: 10
      }
    ]
  },
  bearSharpe: {
    name: "Bear Sharpe",
    isOrderable: false,
    components: [
      {
        name: "cDai",
        percent: 65
      },
      {
        name: "SHORT1xBZX",
        percent: 35
      }
    ]
  }
};
