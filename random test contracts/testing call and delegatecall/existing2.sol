// the difference between exiting and existing2.sol is that we are not creating the Deployed contract's abi for the get 'A' function (check line 6)

pragma solidity ^0.5.0;
contract Deployed {
    
    function setA(uint) public returns (uint) {}

    
}
contract Existing  {
    
    Deployed dc;
    
    constructor (address _t) public {
        dc = Deployed(_t);
    }
 
    
    function setA(uint _val) public returns (uint result) {
        dc.setA(_val);
        return _val;
    }
    
}