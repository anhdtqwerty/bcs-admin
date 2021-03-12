<template>
  <v-form>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="addressToken" label="Address Token"></BaseTextField>
      </v-col>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="avatarUrl" solo label="Avatar Url"></BaseTextField>
      </v-col>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="tokenName" solo label="Token Name"></BaseTextField>
      </v-col>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="totalRaise" label="Poll Name"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseTextField v-model="totalSupply" solo label="Total Raise"></BaseTextField>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="tokenDistribution" solo label="Token Distribution"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="6">
        <BaseTextField v-model="ratio" solo label="Ratio"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="6">
        <BaseTextField v-model="amount" solo label="Amount"></BaseTextField>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="minAllocation" solo label="Min. Allocation"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="6">
        <BaseTextField v-model="maxAllocation" solo label="Max. Allocation"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="6">
        <BaseTextField v-model="endTime" solo label="Crowdsale Time"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="12">
        <v-btn outlined :color="!this.private ? '#FFC107' : 'white'" class="mr-4" dark style="border-radius: 16px !important">Public</v-btn>
        <v-btn dark style=" border-radius: 16px !important">private</v-btn>
      </v-col>
    </v-row>
    <BaseTextArea class="pa-2" v-model="description" label="Project Description"></BaseTextArea>
  </v-form>
</template>

<script>
import BaseTextField from '@/base/BaseTextField.vue'
import BaseTextArea from '@/base/BaseTextArea.vue'
export default {
  name: 'Home',
  data() {
    return {
      addressToken: '',
      avatarUrl: '',
      tokenName: '',
      totalRaise: '',
      description: '',
      totalSupply: '',
      tokenDistribution: '',
      totlRaise: '',
      ratio: '',
      amount: '',
      minAllocation: '',
      maxAllocation: '',
      endTime: '',
      private: false,
    }
  },
  components: {BaseTextField, BaseTextArea},
  async mounted() {},
  methods: {
    getData() {
      console.log({
        addressToken: this.addressToken,
        avatarUrl: this.avatarUrl,
        tokenName: this.tokenName,
        totalRaise: this.totalRaise,
        description: this.description,
        totalSupply: this.totalSupply,
        TokenDistribution: this.TokenDistribution,
        ratio: this.ratio,
        amount: this.amount,
        minAllocation: this.minAllocation,
        maxAllocation: this.maxAllocation,
        endTime: this.endTime,
        private: this.private,
      })
      return {
        addressToken: this.addressToken,
        avatarUrl: this.avatarUrl,
        tokenName: this.tokenName,
        totalRaise: this.totalRaise,
        description: this.description,
        totalSupply: this.totalSupply,
        TokenDistribution: this.TokenDistribution,
        ratio: this.ratio,
        amount: this.amount,
        minAllocation: this.minAllocation,
        maxAllocation: this.maxAllocation,
        endTime: this.endTime,
        private: this.private,
      }
    },
    async createContract() {},
  },
}
</script>
