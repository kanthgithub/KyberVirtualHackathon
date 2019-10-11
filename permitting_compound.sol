pragma solidity ^0.4.18;

import "./DAIStablecoin.sol";

contract permitting_compound {
    DSToken public DSTokenContract;
    
    event Approval(address indexed src, address indexed guy, uint wad);
    
    function permitting_compound (
        DSToken _DSTokenContract
    ) public {
        DSTokenContract = _DSTokenContract;
    }
    
    function approveSomeone(address _whomtoApprove, uint256 _howmuchtoApprove) public returns (bool) {
        bool result = DSTokenContract.approve(_whomtoApprove, _howmuchtoApprove);
        return result;
    }
  
}