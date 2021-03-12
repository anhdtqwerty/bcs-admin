<template>
  <div class="home">
    <v-btn @click="connect">Connect</v-btn>
  </div>
</template>

<script>
import contract from '@/contracts/fixed-pool.js'
var wrapper = require('solc/wrapper')
var solc = wrapper(window.Module)
const Web3 = require('web3')
let web3 = {}
let address = '0x6De563767862133854E4AAdb29684fA7Ee5Bae74'
export default {
  name: 'Home',
  data() {
    return {
      account: {},
      ethereum: {},
    }
  },
  components: {},
  async mounted() {
    web3 = new Web3('https://ropsten.infura.io/v3/f8f39552118b4f23bf57e774021fa01b')
    if (typeof window.ethereum !== 'undefined') {
      this.ethereum = window.ethereum
      console.log('MetaMask is installed!')
    }

    let balance = await web3.eth.getBalance(address)
    console.log(balance)
  },
  methods: {
    async connect() {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
      this.account = accounts[0]
      console.log(this.account)
    },
    async createContract() {
      console.log('compiling contract...')
      let compiledCode = solc.compile(contract)
      const contractABI = JSON.parse(compiledCode.contracts[':Add'].interface)
      console.log(contractABI)
    },
  },
}
</script>
