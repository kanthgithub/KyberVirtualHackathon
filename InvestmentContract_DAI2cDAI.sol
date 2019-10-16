// Background of this contract - Reader Freindly
    // the basic objective of this contract is to make investment as soon as it gets DAI or wETH
    
    // functions:
    
    // - constructor fx
    // -- it will hit the DAI contract and approve Compound to use the DAI sitting in its ownership
    
    // - Invest DAI and transfer cDAI
    // -- This Fx will be called by the contract that is sending the DAI
    // -- This Fx will first check the balance of the DAI that is 'owned' by this contract by querying the DAI contract
    // -- It will then seek to require (ie confirm) [by getting a 'true' return] that this contract has approved the Compound Contract to use its DAI
    // -- It will then call the mint fuction in the cDAI contract; thus transfering the DAI and getting cDAI in return
    // -- It will then transfer the cDAI to the InvestmentHolding Contract
    
    // - Invest wETH and transfer cDAI

pragma solidity >0.4.0 <0.6.0;

// we are creating the interface from the DAI Stablecoin so as to call the approve function to approve cDAI contract to use our DAI
interface Daistablecoin {
   function approve(address guy, uint wad) external returns (bool);
   function balanceOf(address src) external view returns (uint);
}


pragma solidity ^0.5.0;

// we are creating the Compound DAI's interface to call the mint function
interface CErc20 {
    function approve(uint256 mintAmount) external;
    function mint(uint mintAmount) external returns (uint);
    function balanceOf(address src) external view returns (uint);
    function transfer(address dst, uint256 amount) external returns (bool success);
}


pragma solidity ^0.5.0;

import "./ReentrancyGuard.sol";
import "./Ownable.sol";
import "./SafeMath.sol";


contract InvestmentContract is Ownable, ReentrancyGuard{
    using SafeMath for uint;
    
    CErc20 public CErc20Contract;  // for the purpose of setting up the address of the depoloyed Compound DAI contract
    Daistablecoin public DSTokenContract;  // for the purpose of setting up the address of the depoloyed MakerDAO's DAI contract
    
    constructor (CErc20 _CErc20Contract, Daistablecoin _DSTokenContract) public {
        CErc20Contract = _CErc20Contract;
        DSTokenContract = _DSTokenContract;
    }
    
    function approveCompoundDAI(uint _howmuchtoApprove) internal {
        require(DSTokenContract.approve(address(CErc20Contract), _howmuchtoApprove));
    }
    
    // NOTE: to change the address to which the cDAI has to be transferred
    function investingDAI() public {
        uint investment_amount = DSTokenContract.balanceOf(currentContractAddress);
        approveCompoundDAI(investment_amount);
        CErc20Contract.mint(investment_amount);
        uint mintedUnits = CErc20Contract.balanceOf(currentContractAddress);
        approveCompoundDAI(0);
        require(DSTokenContract.balanceOf(currentContractAddress) == 0);
        require(CErc20Contract.transfer(address(0xBF21b5C851488A4Ba3b7b8bd436c1eE7DBd185CD), mintedUnits));
    }
    
    function () external payable {
        revert();
    }
    
    
}
    

    