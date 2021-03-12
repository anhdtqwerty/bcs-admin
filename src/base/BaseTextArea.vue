<template>
  <div>
    <span class="label theme--dark v-label">{{ $attrs.label }}</span>
    <v-textarea @input="handleInput" v-model="content" hide-details class="text-field" label="" v-bind="$attrs" solo dense></v-textarea>
  </div>
</template>

<script>
export default {
  prop: ['value'],
  data() {
    return {
      content: this.value,
    }
  },
  components: {},
  methods: {
    handleInput() {
      this.$emit('input', this.content)
    },
  },
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
