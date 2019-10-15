pragma solidity ^0.5.0;

import "./wrappedETH.sol";

contract ETH2wETH {
    // Variables
    WETH9 public WETH9Contract;
    event Deposit(address indexed dst, uint wad);

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

    function () external payable {
        WETH9Contract.deposit.value(msg.value)();
        uint WETHReceived = WETH9Contract.balanceOf(address(this));
        WETH9Contract.transfer(address(msg.sender), WETHReceived);
    }
    
}