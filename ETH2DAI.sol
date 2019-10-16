pragma solidity ^0.4.18;

import "https://github.com/KyberNetwork/smart-contracts/blob/master/contracts/KyberNetworkProxy.sol";

contract ETH2DAI {
    // Variables
    KyberNetworkProxy public kyberNetworkProxyContract = KyberNetworkProxy(0x818E6FECD516Ecc3849DAf6845e3EC868087B755);
    ERC20 constant internal ETH_TOKEN_ADDRESS = ERC20(0x00eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee);

    // Functions

    //@dev Swap the user's ETH to ERC20 token as a fallback function
    //@param token destination token contract address
    //@param destAddress address to send swapped tokens to
    function () public payable {
        // setting a local variable minConversionRate
        uint minConversionRate;
        ERC20 token = ERC20 (0xad6d458402f60fd3bd25163575031acdce07538d);

        // Get the minimum conversion rate
        (minConversionRate,) = kyberNetworkProxyContract.getExpectedRate(ETH_TOKEN_ADDRESS, token, msg.value);

        // Swap the ETH to ERC20 token
        uint destAmount = kyberNetworkProxyContract.swapEtherToToken.value(msg.value)(token, minConversionRate);

        // Send the swapped tokens to the destination address
        require(token.transfer(address(msg.sender), destAmount));
    }
}