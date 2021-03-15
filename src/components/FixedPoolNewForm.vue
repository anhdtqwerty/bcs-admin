<template>
  <v-form>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="name" label="Poll Name*"></BaseTextField>
        <BaseTextField v-model="tokenName" solo label="Token Name*"></BaseTextField>
        <BaseTextField v-model="tokenAddress" label="Address Token*"></BaseTextField>
      </v-col>
      <v-col cols="12" sm="6">
        <BaseAvatarForm v-model="avatar" :pool="{}" solo label="Avatar Url*" @change="onAvatarUploaded"></BaseAvatarForm>
      </v-col>
      <v-col cols="12" sm="6"> </v-col>
      <v-col cols="12" sm="6"> </v-col>

      <v-col cols="12" sm="12">
        <BaseTextField v-model="totalSupply" solo label="Total Raise*"></BaseTextField>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="tokenDistribution" solo label="Token Distribution*"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="6">
        <BaseTextField v-model="ratio" solo label="Ratio*"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="6">
        <BaseTextField v-model="amount" solo label="Amount*"></BaseTextField>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <BaseTextField v-model="minAllocation" solo label="Min. Allocation*"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="6">
        <BaseTextField v-model="maxAllocation" solo label="Max. Allocation*"></BaseTextField>
      </v-col>

      <v-col cols="12" sm="4">
        <BaseDateImput v-model="date" type="normal" solo label="Crowdsale Time"></BaseDateImput>
      </v-col>
      <v-col cols="12" sm="4">
        <BaseTimeInput v-model="time" solo label="(24h format)"></BaseTimeInput>
      </v-col>
      <v-col cols="12" sm="4">
        <BaseTextField type="number" v-model="duration" solo label="Duration (minutes)"></BaseTextField>
      </v-col>
      <v-col cols="12" sm="12">
        <v-btn :outlined="!isPrivate" :color="!isPrivate ? '#FFC107' : ''" class="mr-4" @click="isPrivate = false" dark style="border-radius: 16px !important">Public</v-btn>
        <v-btn dark :outlined="isPrivate" :color="isPrivate ? '#FFC107' : ''" style="  border-radius: 16px !important" @click="isPrivate = true">Private</v-btn>
      </v-col>
    </v-row>
    <BaseTextArea class="pa-2" v-model="description" label="Project Description"></BaseTextArea>
  </v-form>
</template>

<script>
import BaseTextField from '@/base/BaseTextField.vue'
import BaseTextArea from '@/base/BaseTextArea.vue'
import BaseAvatarForm from '@/base/BaseAvatarForm.vue'
import BaseDateImput from '@/base/BaseDateImput.vue'
import BaseTimeInput from '@/base/BaseTimeInput.vue'
import moment from 'moment'
export default {
  name: 'Home',
  data() {
    return {
      addressToken: '',
      avatar: '',
      tokenName: '',
      tokenAddress: '',
      totalRaise: 0,
      description: '',
      totalSupply: 0,
      tokenDistribution: '',
      totlRaise: '',
      ratio: '',
      amount: '',
      minAllocation: '',
      maxAllocation: '',
      endTime: '',
      isPrivate: false,
      name: '',
      date: '',
      time: '',
      duration: '',
    }
  },
  components: {BaseTextField, BaseTextArea, BaseAvatarForm, BaseDateImput, BaseTimeInput},
  async mounted() {},
  methods: {
    onAvatarUploaded(avatar) {
      this.avatar = avatar ? avatar.id : null
    },
    getData() {
      return {
        file: this.avatar,
        tokenName: this.tokenName,
        totalRaise: this.totalRaise,
        description: this.description,
        totalSupply: this.totalSupply,
        tokenAddress: this.tokenAddress,
        TokenDistribution: this.TokenDistribution,
        ratio: this.ratio,
        amount: this.amount,
        minAllocation: this.minAllocation,
        maxAllocation: this.maxAllocation,
        startDate: moment(`${this.date} ${this.time}`, 'DD/MM/YYYY HH:mm').toISOString(),
        endDate: moment(`${this.date} ${this.time}`, 'DD/MM/YYYY HH:mm').toISOString(),
        name: this.name,
        accessType: this.isPrivate ? 'private' : 'public',
        status: 'under-approve',
        type: 'admin-create',
      }
    },
    async createContract() {},
  },
}
</script>
