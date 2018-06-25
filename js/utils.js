var
Web3 = require('web3'),
web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/')),

// Set your address & ABI
tokenAddress = '',
presaleAddress = '',
tokenAbi = JSON.parse(''),
presaleAbi = JSON.parse(''),

tokenContract = web3.eth.contract(tokenAbi),
presaleContract = web3.eth.contract(presaleAbi),
tokenContractInstance = tokenContract.at(tokenAddress),
presaleContractInstance = presaleContract.at(presaleAddress);

function getMyInfo(myAddress) {
	if(!web3.isAddress(myAddress)) {
		return false;
	}
	return {
		myBalance : web3.fromWei(tokenContractInstance.balanceOf(myAddress).toNumber()),
		myBonus : web3.fromWei(presaleContractInstance.bonusTokens(myAddress).toNumber()),
		myIsWhitelist : isWhitelist(myAddress)
	};
}

function isWhitelist(myAddress) {
	return presaleContractInstance_1.whitelist(myAddress);
}
