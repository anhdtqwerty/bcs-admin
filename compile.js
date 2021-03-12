const contract = require('./src/contracts/fixed-pool.js')
var solc = require('solc')
const Web3 = require('web3')
let web3 = {}
let address = '0x6De563767862133854E4AAdb29684fA7Ee5Bae74'
const app = {
  async init() {
    web3 = new Web3('https://ropsten.infura.io/v3/f8f39552118b4f23bf57e774021fa01b')
    if (typeof window.ethereum !== 'undefined') {
      this.ethereum = window.ethereum
      console.log('MetaMask is installed!')
    }
    let balance = await web3.eth.getBalance(address)
    console.log(balance)
  },
  // async connect() {
  //   const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
  //   this.account = accounts[0]
  //   console.log(this.account)
  // },
  // async createContract() {
  //   console.log('compiling contract...')
  //   let compiledCode = solc.compile(contract)
  //   const contractABI = JSON.parse(compiledCode.contracts[':Add'].interface)
  //   console.log(contractABI)
  // },
}
app.init()
