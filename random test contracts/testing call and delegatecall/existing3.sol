// this is imp, in this contract all we have is the address of the "deployed contract", we do not have the SOL file, thus, NO ABI of the contract.  We somehow know the name of the function that we want to execute

pragma solidity ^0.5.0;
contract ExistingWithoutABI  {
    event AddedValuesByCall(uint256 a, bool success);
    
    constructor () public {
    }
    
    // function setA_Signature(address abc, uint _val) public returns(uint pqr){
    //     (bool result, bytes memory ans) = abc.call(abi.encodeWithSignature("setA(uint)", _val));
    //     emit AddedValuesByCall(_val, result);
    //     pqr = abi.decode(ans, (uint256));
    //     return pqr;
    // }
    
    function addValuesWithCall(address deployed, uint256 a) public returns (uint256) {
        (bool success, bytes memory result) = deployed.call(abi.encodeWithSignature("setA(uint256)", a));
        emit AddedValuesByCall(a, success);
        return abi.decode(result, (uint256));
    }
}