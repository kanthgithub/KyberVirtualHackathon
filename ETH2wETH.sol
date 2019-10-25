pragma solidity ^0.5.0;

import "./wrappedETH.sol";

interface InvestmentContract_wETH2TSv2 {
 function updateqty() external;   // the curent contract will call this function as soon as it gets the ETH
 function gettingtheFactor() external; // the current contract will call this function as soon as it is done with getting the WETH
}

import "./Ownable.sol";
import "./InvestmentContract_wETH2TSv2.sol";

contract ETH2wETH is Ownable {
    // Variables
    WETH9 public WETH9Contract; 
    InvestmentContract_wETH2TSv2 public InvestmentContract_wETH2TSv2Contract; // this is to set the address in which the updateqty function will be called from the API

    // Functions

    function setInvestmentContract_wETH2TSv2 (InvestmentContract_wETH2TSv2 _InvestmentContract_wETH2TSv2Contract) onlyOwner public {
        InvestmentContract_wETH2TSv2Contract = _InvestmentContract_wETH2TSv2Contract;
    }
    
    function setWETH9Contract (WETH9 _WETH9Contract) onlyOwner public {
        WETH9Contract = _WETH9Contract;
    }
    
    function convertAndInvest() external payable {
        InvestmentContract_wETH2TSv2Contract.updateqty();
        WETH9Contract.deposit.value(msg.value)();
        uint WETHReceived = WETH9Contract.balanceOf(address(this));  // 
        WETH9Contract.transfer(address(InvestmentContract_wETH2TSv2Contract), WETHReceived);
        InvestmentContract_wETH2TSv2Contract.gettingtheFactor();
    }
    
}