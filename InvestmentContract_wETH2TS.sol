pragma solidity ^0.5.0;

interface TSQtyOracle {
 function updateqty() payable external;   // this function will be called by the investment contract upon receiving WETH
}



pragma solidity ^0.5.0;

// we are creating the interface from the WETH Contract so as to call the approve function to approve cDAI contract to use our DAI
interface WETH {
   function approve(address guy, uint wad) external returns (bool);
   function balanceOf(address src) external view returns (uint);
}


pragma solidity ^0.5.0;

// we are creating an interface of RebalancingSetIssuanceModule to call the issuance contract
interface RebalancingSetIssuanceModule {
    // function balanceOf(address src) external view returns (uint);
    // function transfer(address dst, uint256 amount) external returns (bool success);
    function issueRebalancingSet(address _rebalancingSetAddress, uint256 _rebalancingSetQuantity, bool _keepChangeInVault) external;
}


pragma solidity ^0.5.0;

// we are creating an interface of the eth20smaco set to check balance and transfer
interface eth20smaco {
    function balanceOf(address src) external view returns (uint);
    function transfer(address dst, uint256 amount) external returns (bool success);
}



pragma solidity ^0.5.0;

import "./ReentrancyGuard.sol";
import "./Ownable.sol";
import "./SafeMath.sol";


contract InvestmentContract_wETH2TS is Ownable, ReentrancyGuard {
    using SafeMath for uint;
    
    RebalancingSetIssuanceModule public RebalancingSetIssuanceModuleContract;  // for the purpose of setting up the address of the depoloyed RebalancingSetIssuanceModule contract
    WETH public WETHContract;  // for the purpose of setting up the address of the depoloyed WETH contract
    eth20smaco public eth20smacoContract;
    TSQtyOracle public TSQtyOracleContract;
    address public TransferProxyContract; 
    uint public factorNumber = 100000000000000000; // setting the factor number to 0.1 ETH
    
    constructor 
    (RebalancingSetIssuanceModule _RebalancingSetIssuanceModuleContract, 
    WETH _WETHContract, 
    eth20smaco _eth20smacoContract, 
    TSQtyOracle _TSQtyOracleContract,
    address _TransferProxyContract) 
    public {
        RebalancingSetIssuanceModuleContract = _RebalancingSetIssuanceModuleContract;
        WETHContract = _WETHContract;
        eth20smacoContract = _eth20smacoContract;
        TransferProxyContract = _TransferProxyContract;
        approveTransferProxy(0);
    }
    
    function setTSQtyOracleContract (TSQtyOracle _TSQtyOracleContract) onlyOwner public {
        TSQtyOracleContract = _TSQtyOracleContract;
    }
    
    function setfactorNumber (uint _newfactorNumber) onlyOwner public {
        require(_newfactorNumber > 10000000000000000); // requiring that the new factor number is at least 0.01 ETH
        factorNumber = _newfactorNumber;
    }
    
    function approveTransferProxy(uint _howmuchtoApprove) internal {
        require(WETHContract.approve(address(TransferProxyContract), _howmuchtoApprove));
    }
    
    
    // function investing_wETH() public {
    //     uint investment_amount = WETHContract.balanceOf(currentContractAddress); // the wETH quantity that we have to be able to convert to TS
    //     uint factor = SafeMath.div(investment_amount, factorNumber);
    //     approveTransferProxy(investment_amount); // approving the TransferProxyContract for the amount of wETH that the contract holds
    //     RebalancingSetIssuanceModuleContract.issueRebalancingSet(address(0x61e391Ad98DaCcD144Ab96913c02eeeF4751C926), uint256 _rebalancingSetQuantity, true);
    //     uint mintedUnits = btceth7525.balanceOf(currentContractAddress);
    //     approveTransferProxy(investment_amount);;
    //     require(WETHContract.balanceOf(currentContractAddress) == 0);
    //     require(btceth7525Contract.transfer(address(0xBF21b5C851488A4Ba3b7b8bd436c1eE7DBd185CD), mintedUnits));
    // }
    
    function () external payable {
        revert();
    }
    
    
}
    

    