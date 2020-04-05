var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"NLG",
		multiplier:1,
		default:true,
		values:["", "nlg", "NLG"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"mNLG",
		multiplier:1000,
		values:["mnlg"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"bits",
		multiplier:1000000,
		values:["bits"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"sat",
		multiplier:100000000,
		values:["sat", "satoshi"],
		decimalPlaces:0
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:2,
		symbol:"$"
	},
	{
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		values:["eur"],
		decimalPlaces:2,
		symbol:"€"
	},
];

module.exports = {
	name:"Gulden",
	ticker:"NLG",
	logoUrlsByNetwork:{
		"main":"/img/logo/nlg.svg",
		"test":"/img/logo/tnlg.svg",
		"regtest":"/img/logo/tnlg.svg"
	},
	siteTitlesByNetwork: {
		"main":"Gulden Explorer",
		"test":"Testnet Explorer",
		"regtest":"Regtest Explorer"
	},
	siteDescriptionHtml:"",
	nodeTitle:"Gulden Full Node",
	nodeUrl:"",
	demoSiteUrl: "",
	miningPoolsConfigUrls:[
//		"https://raw.githubusercontent.com/btccom/Blockchain-Known-Pools/master/pools.json",
//		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json"
	],
	maxBlockWeight: 4000000,
	maxBlockSize: 1000000,
	difficultyAdjustmentBlockCount: 1,
	maxSupplyByNetwork: {
		"main": new Decimal(1680000000),
		"test": new Decimal(1680000000),
		"regtest": new Decimal(1680000000)
	},
	targetBlockTimeSeconds: 150,
	targetBlockTimeMinutes: 2.5,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"NLG":currencyUnits[0], "mNLG":currencyUnits[1], "bits":currencyUnits[2], "sat":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHashesByNetwork:{
		"main":    "6c5d71a461b5bff6742bb62e5be53978b8dec5103ce52d1aaab8c6a251582f92",
		"test":    "6c5d71a461b5bff6742bb62e5be53978b8dec5103ce52d1aaab8c6a251582f92",
		"regtest": "6c5d71a461b5bff6742bb62e5be53978b8dec5103ce52d1aaab8c6a251582f92"
	},
	genesisCoinbaseTransactionIdsByNetwork: {
		"main":    "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8",
		"test":    "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8",
		"regtest": "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8"
	},
	genesisCoinbaseTransactionsByNetwork:{
		"main": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff3a04ffff001d0104324f6e206a616e756172692031737420746865204475746368206c6f73742074686572652062656c6f7665642047756c64656effffffff0100000000000000000200ac00000000",
			"txid": "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8",
			"hash": "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8",
			"size": 241,
			"vsize": 241,
			"version": 1,
			"confirmations":1131981,
			"vin": [
				{
					"coinbase": "04ffff001d0104324f6e206a616e756172692031737420746865204475746368206c6f73742074686572652062656c6f7665642047756c64656e",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 0,
					"n": 0,
					"scriptPubKey": {
						"asm": "0 OP_CHECKSIG",
						"hex": "00ac",
						"reqSigs": 1,
						"type": "nonstandard",
					}
				}
			],
			"blockhash": "6c5d71a461b5bff6742bb62e5be53978b8dec5103ce52d1aaab8c6a251582f92",
			"time": 1009843200,
			"blocktime": 1230988505
		},
		"test": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff3a04ffff001d0104324f6e206a616e756172692031737420746865204475746368206c6f73742074686572652062656c6f7665642047756c64656effffffff0100000000000000000200ac00000000",
			"txid": "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8",
			"hash": "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8",
			"size": 241,
			"vsize": 241,
			"version": 1,
			"confirmations":1131981,
			"vin": [
				{
					"coinbase": "04ffff001d0104324f6e206a616e756172692031737420746865204475746368206c6f73742074686572652062656c6f7665642047756c64656e",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 0,
					"n": 0,
					"scriptPubKey": {
						"asm": "0 OP_CHECKSIG",
						"hex": "00ac",
						"reqSigs": 1,
						"type": "nonstandard",
					}
				}
			],
			"blockhash": "6c5d71a461b5bff6742bb62e5be53978b8dec5103ce52d1aaab8c6a251582f92",
			"time": 1009843200,
			"blocktime": 1230988505
		},
        "regtest": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff3a04ffff001d0104324f6e206a616e756172692031737420746865204475746368206c6f73742074686572652062656c6f7665642047756c64656effffffff0100000000000000000200ac00000000",
			"txid": "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8",
			"hash": "4bed0bcb3e6097445ae68d455137625bb66f0e7ba06d9db80290bf72e3d6dcf8",
			"size": 241,
			"vsize": 241,
			"version": 1,
			"confirmations":1131981,
			"vin": [
				{
					"coinbase": "04ffff001d0104324f6e206a616e756172692031737420746865204475746368206c6f73742074686572652062656c6f7665642047756c64656e",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 0,
					"n": 0,
					"scriptPubKey": {
						"asm": "0 OP_CHECKSIG",
						"hex": "00ac",
						"reqSigs": 1,
						"type": "nonstandard",
					}
				}
			],
			"blockhash": "6c5d71a461b5bff6742bb62e5be53978b8dec5103ce52d1aaab8c6a251582f92",
			"time": 1009843200,
			"blocktime": 1230988505
		}
	},
	genesisBlockStatsByNetwork:{
		"main": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1231006505,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 5000000000,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1231006505,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		},
		"test": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1296688602,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 5000000000,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1296688602,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		}
	},
	genesisCoinbaseOutputAddressScripthash:"",
	historicalData: [
		{
			type: "blockheight",
			date: "2009-01-03",
			chain: "main",
			blockHeight: 0,
			blockHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
			summary: "The Genesis Block.",
			alertBodyHtml: "This is the first block in the blockchain, known as the 'Genesis Block'.",
			referenceUrl: ""
		},
		{
			type: "blockheight",
			date: "2017-08-24",
			chain: "main",
			blockHeight: 1131653,
			blockHash: "12245cff89fa649522a4b51791497ea80b22967e8f09afcf0fd74a6a9db3ef32",
			summary: "First phase4 block.",
			referenceUrl: ""
		}
	],
	exchangeRateData:{
		jsonUrl:"https://api.gulden.com/api/v1/ticker",
		responseBodySelectorFunction:function(responseBody) {
			//console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

			var exchangedCurrencies = ["USD", "GBP", "EUR"];

			if (responseBody.bpi) {
				var exchangeRates = {};

				for (var i = 0; i < exchangedCurrencies.length; i++) {
					if (responseBody.bpi[exchangedCurrencies[i]]) {
						exchangeRates[exchangedCurrencies[i].toLowerCase()] = responseBody.bpi[exchangedCurrencies[i]].rate_float;
					}
				}

				return exchangeRates;
			}
			
			return null;
		}
	},
	blockRewardFunction:function(blockHeight, chain) {
        if(blockHeight == 1)
        {
            return 170000000;
        }
        else if(blockHeight < 250001)
        {
            return 1000;
        }
        else if(blockHeight < 1030001)
        {
            return 100;
        }
        else if (blockHeight < 1131653)
        {
            return 110;
        }
        else if(blockHeight <= 10888471)
        {
            return 120;
        }
	}
};
