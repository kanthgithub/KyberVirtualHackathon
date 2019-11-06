import { CONTRACT_ABI } from '../web3/abi';
import {
  LENDER_CONTRACT_ADDRESS,
  ETHMAXIMALIST_CONTRACT_ADDRESS
} from '../web3/address';
import ETHMAXIMALIST_ABI from '../web3/EthMaximalistABI';

const contractProvider = name => {
  switch (name) {
    case 'Lender': {
      return {
        contractAbi: CONTRACT_ABI,
        contractAddress: LENDER_CONTRACT_ADDRESS
      };
    }
    case 'ETH Maximalist': {
      return {
        contractAbi: ETHMAXIMALIST_ABI,
        contractAddress: ETHMAXIMALIST_CONTRACT_ADDRESS
      };
    }
    default:
      return null;
  }
};

export default contractProvider;
