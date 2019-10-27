const Baskets = {
    "lender" : {
        "name": "Lender",
        "isOrderable": true,
        "components": [{
            "name": "cDai",
            "percent": 90
        }, {
            "name": "2xLONG-ETH",
            "percent": 10
        }]
    },
    "bullSharpe": {
        "name": "Bull Sharpe",
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
        "name": "Bear Sharpe",
        'isOrderable': false,
        "components": [{
            "name": "cDai",
            "percent": 90
        }, {
            "name": "SHORT1xBZX",
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
            "percent" : 50
        }]
    },
    // "moderate": {},
    // "moderateBear": {},
    // "longTermBull": {},
    // "shortTermBear": {},
    // "shortTermFlat": {},
    // "moderateDiversified": {},
    // "moderateFlat": {},
    // "hedgedBull": {},
    // "passiveBear": {},
    // "beginnerBull": {},
    // "beginnerBear": {},
    // "acitveBear": {},
    // "activeBear": {},
    // "flatLands": {},
    // "shortTermBull": {},
    // "riskyBear": {},
    // "riskyBull": {},
    // "activeBull": {}
};

export default Baskets;