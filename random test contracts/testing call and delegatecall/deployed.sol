pragma solidity ^0.5.0;
contract Deployed {
    uint256 public a;
    
    function setA(uint256 _a) public returns (uint) {
        a = _a;
        return a;
    }
    
}