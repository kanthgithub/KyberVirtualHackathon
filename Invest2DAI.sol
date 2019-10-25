pragma solidity ^0.5.0;

import "./Ownable.sol";

interface ERC20 {
    function totalSupply() external view returns (uint supply);
    function balanceOf(address _owner) external view returns (uint balance);
    function transfer(address _to, uint _value) external returns (bool success);
    function transferFrom(address _from, address _to, uint _value) external returns (bool success);
    function approve(address _spender, uint _value) external returns (bool success);
    function allowance(address _owner, address _spender) external view returns (uint remaining);
    function decimals() external view returns(uint digits);
    event Approval(address indexed _owner, address indexed _spender, uint _value);
}

interface IKyberNetworkProxy {
    function getExpectedRate(ERC20 src, ERC20 dest, uint srcQty) external view returns (uint expectedRate, uint slippageRate);
    function tradeWithHint(ERC20 src, uint srcAmount, ERC20 dest, address destAddress, uint maxDestAmount, uint minConversionRate, address walletId, bytes calldata hint) external payable returns(uint);
    function swapEtherToToken(ERC20 token, uint minRate) external payable returns (uint);
}


contract Invest2cDAI is Ownable {
    // state variables
    IKyberNetworkProxy public kyberNetworkProxyContract = IKyberNetworkProxy(0x818E6FECD516Ecc3849DAf6845e3EC868087B755);
    ERC20 constant internal ETH_TOKEN_ADDRESS = ERC20(0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee);
    ERC20 internal DAI_TOKEN_ADDRESS = ERC20(0xaD6D458402F60fD3Bd25163575031ACDce07538D);
    uint public balance;

    // this function should be called should we ever want to change the kyberNetworkProxyContract address
    function set_kyberNetworkProxyContract(IKyberNetworkProxy _kyberNetworkProxyContract) onlyOwner public {
        kyberNetworkProxyContract = _kyberNetworkProxyContract;
    }
    
    function set_DAI_TOKEN_ADDRESS(ERC20 _DAI_TOKEN_ADDRESS) onlyOwner public {
        DAI_TOKEN_ADDRESS = _DAI_TOKEN_ADDRESS;
    }
    
    
    function letsGetSomeDAI() public payable {
        uint minConversionRate;
        (minConversionRate,) = kyberNetworkProxyContract.getExpectedRate(ETH_TOKEN_ADDRESS, DAI_TOKEN_ADDRESS, msg.value);
        uint destAmount = kyberNetworkProxyContract.swapEtherToToken.value(msg.value)(DAI_TOKEN_ADDRESS, minConversionRate);
        require(DAI_TOKEN_ADDRESS.transfer(address(msg.sender), destAmount));
    }
    
    
    // fx in relation to ETH held by the contract sent by the owner
    
    // - this function lets you deposit ETH into this wallet
    function depositETH() payable public onlyOwner returns (uint) {
        balance += msg.value;
    }
    
    // - fallback function let you / anyone send ETH to this wallet without the need to call any function
    function() external payable {
        if (msg.sender == owner) {
            depositETH();
        } else {
            letsGetSomeDAI();
        }
    }
    
    // - to withdraw any ETH balance sitting in the contract
    function withdraw() onlyOwner public{
        owner.transfer(address(this).balance);
    }
 
}