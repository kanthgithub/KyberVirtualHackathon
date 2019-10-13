pragma solidity >0.4.0 <0.6.0;

interface Daistablecoin {
   function approve(address guy, uint wad) external returns (bool);
}


pragma solidity ^0.5.0;

import "./CompoundDai.sol";

contract permitting_compound {
    CErc20 public CErc20Contract;
    Daistablecoin public DSTokenContract;
    uint public balance = address(this).balance;
    
    // function permitting_compound (
    //     DSToken _DSTokenContract,
    //     CErc20 _CErc20Contract
    // ) public {
    //     DSTokenContract = _DSTokenContract;
    //     CErc20Contract = _CErc20Contract;
    // }
    
    constructor (CErc20 _CErc20Contract) public {
        CErc20Contract = _CErc20Contract;
    }
    
    function setDaiStableCoinAddress(Daistablecoin _DSTokenContract) public {
        DSTokenContract = _DSTokenContract;
        
    }
    
    function depositETH() payable public returns (uint) {
        balance += msg.value;
    }
    
    // fallback function let you / anyone send ETH to this wallet without the need to call any function
    function() external payable {
        balance += msg.value;
    }
    
    
    function approveSomeone(address _whomtoApprove, uint256 _howmuchtoApprove) public returns (bool) {
        bool result = DSTokenContract.approve(_whomtoApprove, _howmuchtoApprove);
        return result;
    }
    
    function doSomeMinting(uint256 _howmuchtoMint) public {
        CErc20Contract.mint(_howmuchtoMint);
    }
    
    
}