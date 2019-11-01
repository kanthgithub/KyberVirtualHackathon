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
        }]
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