const Baskets = {
    "lender": {
        "name": "Lender",
        "isOrderable": true,
        "components": [{
            "name": "cDai",
            "percent": 90
        }, {
            "name": "dLETH2x",
            "percent": 10
        }]
    },
    "ETHMaximalist": {
        "name": "ETH Maximalist",
        "isOrderable": true,
        "components": [{
            "name": "dLETH2x",
            "percent": 50
        }, {
            "name": "dsWBTC",
            "percent": 50
        }],
        "description": "ETH Maximalist Zap to add text: What does this Zap do? Your deposit is automatically split between bZx Perpetual Short WBTC (dsWBTC) and bZx Perpetual Long ETH-DAI 2x(dLETH2x). For example, if you send 1 ETH to ETHMaximalist.DeFiZap.eth or buy from our website, 0.5 of your ETH will go towards opening a Perpetual (without expiration) BTC Short position on Fulcrum exchange while 0.5 will be used to open a Perpetual ETH Long with 2x leverage. This means you will have exposure to 1 ETH (0.5X2) and 0.5 ETH’s worth of WBTC Short position. After sending your ETH, you will immediately receive allocated tokens (dsWBTC+dLETH2x) which track your trade positions. Once you receive these tokens you can visit Fulcrum.Trade to view your ROI and close positions. <a href='https://defitutorials.substack.com/p/margin-trading-with-fulcrum'>Check out this tutorial we made</a> to help you use Fulcrum. Soon you will be able to manage your positions and assets directly from DeFiZap Dashboard."
    },
    "bullSharpe": {
        "name": "Conservative Bull",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 90
        }, {
            "name": "ETHMINVOL",
            "percent": 10
        }]
    },
    "bearSharpe": {
        "name": "Conservative Bear",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 90
        }, {
            "name": "dSETH1x",
            "percent": 10
        }]
    },
    "moderateBull": {
        "name": "Moderate Bull",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 25
        }, {
            "name": "ETH20SMACO",
            "percent": 25
        }, {
            "name": "ETHMINVOL",
            "percent": 50
        }]
    },
    "moderate": {
        "name": "Moderate",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 50
        }, {
            "name": "ETH12EMA",
            "percent": 25
        }, {
            "name": "ETHMINVOL",
            "percent": 25
        }]
    },
    "moderateBear": {
        "name": "Moderate Bear",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 50
        }, {
            "name": "ETHHIVOL",
            "percent": 25
        }, {
            "name": "ETH12EMA",
            "percent": 25
        }]
    },
    "longTermBull": {
        "name": "Long Term Bull",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 20
        }, {
            "name": "ETH20SMACO",
            "percent": 40
        }, {
            "name": "ETHMINVOL",
            "percent": 40
        }]
    },
    "shortTermBear": {
        "name": "Short Term Bear",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 20
        }, {
            "name": "ETHHIVOL",
            "percent": 40
        }, {
            "name": "ETH12EMA",
            "percent": 40
        }]
    },
    "shortTermFlat": {
        "name": "Short Term Flat",
        "isOrderable": false,
        "components": [{
            "name": "ETHMINVOL",
            "percent": 50
        }, {
            "name": "ETH20SMACO",
            "percent": 25
        }, {
            "name": "ETH12EMA",
            "percent": 25
        }]
    },
    "moderateDiversified": {
        "name": "Moderate Diversified",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 25
        }, {
            "name": "ETH12EMA",
            "percent": 25
        }, {
            "name": "ETH26EMA",
            "percent": 25
        }, {
            "name": "dLETH2x",
            "percent": 25
        }]
    },
    "moderateFlat": {
        "name": "Moderate Flat",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 25
        }, {
            "name": "ETHMINVOL",
            "percent": 50
        }, {
            "name": "ETH12EMA",
            "percent": 25
        }]
    },
    "hedgedBull": {
        "name": "Hedge Bull",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 50
        }, {
            "name": "ETHMINVOL",
            "percent": 40
        }, {
            "name": "dLETH2x",
            "percent": 10
        }]
    },
    "beginnerBull": {
        "name": "Beginner Bull",
        "isOrderable": false,
        "components": [{
            "name": "ETHMINVOL",
            "percent": 50
        }, {
            "name": "ETH20SMA",
            "percent": 50
        }]
    },
    "beginnerBear": {
        "name": "Beginner Bear",
        "isOrderable": false,
        "components": [{
            "name": "cDai",
            "percent": 50
        }, {
            "name": "ETH12EMA",
            "percent": 25
        }, {
            "name": "ETH26EMA",
            "percent": 25
        }]
    },
    "activeBear": {
        "name": "Active Bear",
        "isOrderable": false,
        "components": [{
            "name": "ETHHIVOL",
            "percent": 50
        }, {
            "name": "ETH12EMA",
            "percent": 25
        }, {
            "name": "dSETH2x",
            "percent": 25
        }]
    },
    "activeBull": {
        "name": "Active Bull",
        "isOrderable": false,
        "components": [{
            "name": "ETHHIVOL",
            "percent": 50
        }, {
            "name": "ETH12EMA",
            "percent": 50
        }]
    },
    "flatLands": {
        "name": "Flat Lands",
        "isOrderable": false,
        "components": [{
            "name": "ETHMINVOL",
            "percent": 50
        }, {
            "name": "ETH12EMA",
            "percent": 50
        }]
    },
    "shortTermBull": {
        "name": "Short Term Bull",
        "isOrderable": false,
        "components": [{
            "name": "ETHMINVOL",
            "percent": 50
        }, {
            "name": "ETH20SMACO",
            "percent": 50
        }]
    },
    "riskyBear": {
        "name": "Risky Bear",
        "isOrderable": false,
        "components": [{
            "name": "ETHHIVOL",
            "percent": 50
        }, {
            "name": "ETH12EMA",
            "percent": 25
        }, {
            "name": "dLETH2x",
            "percent": 25
        }]
    },
    "riskyBull": {
        "name": "Risky Bull",
        "isOrderable": false,
        "components": [{
            "name": "ETHMINVOL",
            "percent": 25
        }, {
            "name": "dLETH2x",
            "percent": 75
        }]
    }
};

export default Baskets;