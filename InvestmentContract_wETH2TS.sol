pragma solidity ^0.5.0;

// we are creating the interface from the WETH Contract so as to call the approve function to approve 
interface WETH {
   function approve(address guy, uint wad) external returns (bool);
   function balanceOf(address src) external view returns (uint);
   function transfer(address dst, uint wad) external returns (bool);
}


pragma solidity ^0.5.0;

// we are creating an interface of RebalancingSetIssuanceModule to call the issuance contract
interface RebalancingSetIssuanceModule {
    // function balanceOf(address src) external view returns (uint);
    // function transfer(address dst, uint256 amount) external returns (bool success);
    function issueRebalancingSet(address _rebalancingSetAddress, uint256 _rebalancingSetQuantity, bool _keepChangeInVault) external;
}


pragma solidity ^0.5.0;

// we are creating an interface of the ethhivol set to check balance and transfer
interface ethhivol {
    function balanceOf(address src) external view returns (uint);
    function transfer(address dst, uint256 amount) external returns (bool success);
}

pragma solidity ^0.5.0;

import "./ReentrancyGuard.sol";
import "./Ownable.sol";
import "./SafeMath.sol";
import "https://github.com/provable-things/ethereum-api/blob/master/provableAPI_0.5.sol";


contract InvestmentContract_wETH2TS is Ownable, ReentrancyGuard, usingProvable {
    using SafeMath for uint;
    
    
    // setting important contracts that are used below
    RebalancingSetIssuanceModule public RebalancingSetIssuanceModuleContract;  // for the purpose of setting up the address of the depoloyed RebalancingSetIssuanceModule contract
    WETH public WETHContract;  // for the purpose of setting up the address of the depoloyed WETH contract
    ethhivol public ethhivolContract;  // this is where the investment is being made and then we need to transfer out the tokens too;
    address public TransferProxyContract; 
    
    // variables relating to the oracle part of the contract
    uint public TSQty; // this is the variable where the result from callback function from the provable contract is stored
    address public ETH2WETH;  // this is to put a modifier on the calling of the updateQty function
    bool public isTQtyReady = false;  // this will be changed as soon as the TSQty is ready and then flipped back as soon as an investment made
    
    // variables in relation to the investment part of the contract
    uint public factorDenominator = 100000000000000000; // setting the factor number to 0.1 ETH
    bool public isFactorReady = false; // this will be changed as soon as the TSQty is ready and then flipped back as soon as an investment made
    uint public factor; // this is variable which will store the result of the howManyTimes function
    
    // variables in relation to ETH held by the contract
    uint public balance;
    
    constructor 
    (RebalancingSetIssuanceModule _RebalancingSetIssuanceModuleContract, 
    WETH _WETHContract, 
    ethhivol _ethhivolContract, 
    address _TransferProxyContract,
    address _ETH2WETHContract) 
    public {
        RebalancingSetIssuanceModuleContract = _RebalancingSetIssuanceModuleContract;
        WETHContract = _WETHContract;
        ethhivolContract = _ethhivolContract;
        TransferProxyContract = _TransferProxyContract;
        ETH2WETH = _ETH2WETHContract;
        approveTransferProxy(2^256-1); // by default approving the TransferProxyContract for highest possible value in solidity
    }
    
    
    // functions in relation to the oracle call
    modifier onlyETH2WETH() {
    require(msg.sender == ETH2WETH);
    _;
    }
    
    // this function is called by the ETH2WETH contract as soon as it receives the ETH to save time, cause the oracle reply takes time
    function updateqty() onlyETH2WETH payable public {
        TSQty = 0; // reseting the qty to be zero first whenever new ETH is received by the other contract
        if (provable_getPrice("URL") > address(this).balance) {
        } else {
        provable_query("URL", "json(https://sleepy-shelf-37331.herokuapp.com/test?isString=true).qty");
        }
    }
    
    // this function will be called by the provable oracle contract by providing the result
    // this function converts the result into uint
    // then it checks if the factor is ready and initiates investment
    // else it will change the state that the TSQty reply has been received
    function __callback(bytes32 myid, string memory result) public {
           if (msg.sender != provable_cbAddress()) revert();
           TSQty = parseIntt(result);
           if (isFactorReady) {
               letsInvest();
            } else {
               isTQtyReady = true;
            }
    }
    
    
    // this is just a helper function which converts the reply from the API from string to uint
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
    
    
    // investment functions below:
    
    
    // this function may not be called ever; this is only to change the factor number if needed
    function setfactorDenomintor (uint _newDenominatorNumber) onlyOwner public {
        require(_newDenominatorNumber > 10000000000000000); // requiring that the new factor number is at least 0.01 ETH
        factorDenominator = _newDenominatorNumber;
    }
    
    
    // the Transfer Proxy Contract is provided by the TokenSet guys which moves the WETH to the relvant set contract and hence needs to be approved
    // this function will called whenever WETH is received with the WETH received and after investment recalled to bring down the approval to zero so that there is no missue
    function approveTransferProxy(uint _howmuchtoApprove) internal {
        require(WETHContract.approve(address(TransferProxyContract), _howmuchtoApprove));
    }
     
    
    // this function will be called by the ETH2WETH contract as soon as it transfers the WETH
    // the API will throw back the quantity of TokenSets that can be bought for 0.1 ETH only
    // thus this function first computes how many 0.1 ETH do we have in WETH
    // please note this will round down the result to the nearest integer and hence there is a risk of loosing upto 0.099 WETH (really small amount in USD); this amount will be transferred into a reserve contract
    // this function will then look if the TSQty callback has been done and then initiate the investment function
    // else it will be change the state that the factor is ready
    function gettingtheFactor() external {
        uint investment_amount = WETHContract.balanceOf(address(this)); // the contract checks the balance of WETH that it has; it will be zero right before this
        factor = (SafeMath.div(investment_amount, factorDenominator));

        if (isTQtyReady) {
            letsInvest();
        } else {
            isFactorReady = true;
        }
    }
    
    function letsInvest() internal {
        uint Qty2Buy = SafeMath.mul(factor, TSQty);
        RebalancingSetIssuanceModuleContract.issueRebalancingSet(address(0x8Ddc86DbA7ad728012eFc460b8A168Aba60B403B), Qty2Buy, true);
        uint mintedUnits = ethhivolContract.balanceOf(address(this));
        ethhivolContract.transfer(address(0x19627796b318E27C333530aD67c464Cfc37596ec), mintedUnits);
        
        // sending the residual WETH to reserve address
        uint residual_amount = WETHContract.balanceOf(address(this));
        WETHContract.transfer(address(0x19627796b318E27C333530aD67c464Cfc37596ec), residual_amount);
        
        // resetting the important bool flags back to false
        isFactorReady = false;
        isTQtyReady = false;
    }
    
    
    
    // this is the fallback function which is reverting any ETH sent by mistake to this contract
    function () external payable {
        revert();
    }
    
    
    // functions in relation to managing the ETH held by this contract
    function depositETH() public payable {
       balance = balance + msg.value;
    }
   
    function withdraw() onlyOwner public{
        owner.transfer(address(this).balance);
    }
    
    
}
