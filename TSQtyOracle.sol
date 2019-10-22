pragma solidity ^0.5.0;

import "https://github.com/provable-things/ethereum-api/blob/master/provableAPI_0.5.sol";

contract TSQtyOracle is usingProvable {

   uint public qty;
   event LogConstructorInitiated(string nextStep);
   event LogPriceUpdated(string price);
   event LogNewProvableQuery(string description);

   constructor () public {
       emit LogConstructorInitiated("Constructor was initiated. Call 'updatePrice()' to send the Provable Query.");
   }

   function __callback(bytes32 myid, string memory result) public {
       if (msg.sender != provable_cbAddress()) revert();
       qty = parseIntt(result);
       emit LogPriceUpdated(result);
   }
   
    function parseIntt(string memory _value)
        internal
        pure
        returns (uint) {
        uint _ans;
        bytes memory _bytesValue = bytes(_value);
        uint j = 1;
        for(uint i = _bytesValue.length-1; i >= 0 && i < _bytesValue.length; i--) {
            assert(uint8(_bytesValue[i]) >= 48 && uint8(_bytesValue[i]) <= 57);
            _ans += (uint8(_bytesValue[i]) - 48)*j;
            j*=10;
        }
        return _ans;
    }

   function updateqty() payable public {
       if (provable_getPrice("URL") > address(this).balance) {
           emit LogNewProvableQuery("Provable query was NOT sent, please add some ETH to cover for the query fee");
       } else {
           emit LogNewProvableQuery("Provable query was sent, standing by for the answer..");
           provable_query("URL", "json(https://sleepy-shelf-37331.herokuapp.com/test?isString=true).qty");
       }
   }
}