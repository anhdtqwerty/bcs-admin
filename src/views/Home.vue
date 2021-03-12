<template>
  <div class="home" style="max-width: 600px; margin: 0 auto">
    <p class="headline pa-4 mt-6">Create New Fixed Pool</p>
    <FixedPoolNewForm ref="form" />
    <v-btn class="ma-4 mt-0" @click="submit" color="#FFC107" style="color: black; border-radius: 16px !important">Create Pool</v-btn>
  </div>
</template>

<script>
const Web3 = require('web3')
let web3 = {}
let address = '0x6De563767862133854E4AAdb29684fA7Ee5Bae74'
import FixedPoolNewForm from '@/components/FixedPoolNewForm.vue'
export default {
  name: 'Home',
  data() {
    return {
      account: {},
      ethereum: {},
    }
  },
  components: {FixedPoolNewForm},
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
    async submit() {
      console.log('submit')
      console.log(this.$refs.form.getData())
    },
    async createContract() {},
  },
}
</script>
