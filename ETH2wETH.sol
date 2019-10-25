pragma solidity ^0.5.0;

interface InvestmentContract_wETH2TSv2 {
 function updateqty() payable external;   // this function will be called by the investment contract upon receiving WETH
}

import "./Ownable.sol";
import "./wrappedETH.sol";

contract ETH2wETH is Ownable {
    // Variables
    WETH9 public WETH9Contract; 
    event Deposit(address indexed dst, uint wad);
    InvestmentContract_wETH2TSv2 public InvestmentContract_wETH2TSv2Contract; // this is to set the address in which the updateqty function will be called from the API

    // Functions
    /**
     * @dev Contract constructor
     * @param _WETH9Contract is WETH9 contract address
     */
    constructor(
        WETH9 _WETH9Contract
    ) public {
        WETH9Contract = _WETH9Contract;
    }

    function setInvestmentContract_wETH2TSv2 (InvestmentContract_wETH2TSv2 _InvestmentContract_wETH2TSv2Contract) onlyOwner public {
        InvestmentContract_wETH2TSv2Contract = _InvestmentContract_wETH2TSv2Contract;
    }
    
    function () external payable {
        InvestmentContract_wETH2TSv2Contract.updateqty();
        WETH9Contract.deposit.value(msg.value)();
        uint WETHReceived = WETH9Contract.balanceOf(address(this));  // dipeshNote: To check that the mainnet transaction of sending ETH and getting WETH is in the same transaction
        WETH9Contract.transfer(address(msg.sender), WETHReceived); // dipeshNote: to update the address to which the WETH is sent
    }
    
}