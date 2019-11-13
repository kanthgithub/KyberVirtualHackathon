import {
  LENDER_CONTRACT_ADDRESS,
  ETHMAXIMALIST_CONTRACT_ADDRESS,
  SHORT_TERM_BULL_CONTRACT_ADDRESS
} from '../web3/address';

import LENDER_ABI from '../web3/abi';
import ETHMAXIMALIST_ABI from '../web3/EthMaximalistABI';
import SHORTTERMBULL_ABI from '../web3/shortTermBullAbi';

const contractProvider = name => {
  switch (name) {
    case 'Lender': {
      return {
        contractAbi: LENDER_ABI,
        contractAddress: LENDER_CONTRACT_ADDRESS
      };
    }
    case 'ETH Maximalist': {
      return {
        contractAbi: ETHMAXIMALIST_ABI,
        contractAddress: ETHMAXIMALIST_CONTRACT_ADDRESS
      };
    }
    case 'Short Term Bull': {
      return {
        contractAbi: SHORT_TERM_BULL_CONTRACT_ADDRESS,
        contractAddress: SHORTTERMBULL_ABI
      };
    }
    default:
      return null;
  }
};

export default contractProvider;
