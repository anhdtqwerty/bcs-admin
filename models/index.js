const Web3 = require('web3')
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')

const FixedSwapContract = require('./FixedSwapContract')
const Account = require('./Account')
const ERC20TokenContract = require('./ERC20TokenContract')

module.exports = {
  init() {},
  getFixedSwapContract: ({tokenAddress, decimals, contractAddress = null}, {key, gasPrice, gas}) => {
    const acc = new Account(web3, web3.eth.accounts.privateKeyToAccount(key))
    const fixedContract = new FixedSwapContract({
      web3,
      tokenAddress: tokenAddress,
      decimals: decimals,
      contractAddress: contractAddress,
      acc,
      gasPrice,
      gas,
    })
    fixedContract.__init__()
    return fixedContract
  },

  getERC20TokenContract({tokenAddress, decimals}, acc) {
    return new ERC20TokenContract({
      web3,
      contractAddress: tokenAddress,
      decimals: decimals,
      acc,
    })
  },

  getETHBalance: async (add) => {
    let wei = await web3.eth.getBalance(add)
    return web3.utils.fromWei(wei, 'ether')
  },
  web3,
}
