import {
  LENDER_CONTRACT_ADDRESS,
  ETHMAXIMALIST_CONTRACT_ADDRESS,
  DOUBLE_BULL_CONTRACT_ADDRESS,
  MODERATE_BULL_CONTRACT_ADDRESS
} from '../web3/address';

import LENDER_ABI from '../web3/abi';
import ETHMAXIMALIST_ABI from '../web3/ethmaxAbi';
import SHORTTERMBULL_ABI from '../web3/DoubleBullAbi';
import MODERATE_BULL_ABI from '../web3/moderateBullAbi';

const contractProvider = name => {
  switch (name) {
    case 'Lender': {
      return {
        contractAbi: LENDER_ABI,
        contractAddress: LENDER_CONTRACT_ADDRESS,
        gas: 5000000
      };
    }
    case 'ETH Maximalist': {
      return {
        contractAbi: ETHMAXIMALIST_ABI,
        contractAddress: ETHMAXIMALIST_CONTRACT_ADDRESS,
        gas: 5000000
      };
    }
    case 'Moderate Bull': {
      return {
        contractAbi: MODERATE_BULL_ABI,
        contractAddress: MODERATE_BULL_CONTRACT_ADDRESS,
        gas: 1000000,
        gasPrice: '1000000000'
      };
    }
    case 'Double Bull': {
      return {
        contractAbi: SHORTTERMBULL_ABI,
        contractAddress: DOUBLE_BULL_CONTRACT_ADDRESS,
        gas: 5000000
      };
    }
    default:
      return null;
  }
};

export default contractProvider;
