<template>
  <div>
    <span class="label theme--dark v-label">{{ $attrs.label }}</span>
    <v-textarea solo name="input-7-1" hide-details="" label="" class="theme--dark v-label"></v-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {},
      ethereum: {},
    }
  },
  components: {},
}
</script>
<style scoped>
.label {
  font-size: 12px;
}
.text-field,
.label {
  font-size: 14px !important;
}
</style>
