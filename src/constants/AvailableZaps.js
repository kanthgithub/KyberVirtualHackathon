const AVAILABLE_ZAPS = {
  ETHMaximalist: {
    id: 'ETHMaximalist',
    name: 'ETH Maximalist',
    isOrderable: true,
    color: '',
    components: [
      {
        name: 'dLETH2x',
        percent: 50
      },
      {
        name: 'dsWBTC',
        percent: 50
      }
    ]
  },
  lender: {
    id: 'lender',
    name: 'Lender',
    isOrderable: true,
    components: [
      {
        name: 'cDai',
        percent: 90
      },
      {
        name: 'dLETH2x',
        percent: 10
      }
    ]
  },
  moderateBull: {
    id: 'moderatebull',
    name: 'Moderate Bull',
    isOrderable: true,
    components: [
      {
        name: 'sETH',
        percent: 50
      },
      {
        name: 'sBTC',
        percent: 50
      }
    ]
  },
  doublebull: {
    id: 'doublebull',
    name: 'Double Bull',
    isOrderable: true,
    components: [
      {
        name: 'dLETH2x',
        percent: 50
      },
      {
        name: 'dLWBTC2x',
        percent: 50
      }
    ]
  }
};

export default AVAILABLE_ZAPS;
