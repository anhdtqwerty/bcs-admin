<template>
  <div>
    <span class="label theme--dark v-label">{{ $attrs.label }}</span>
    <v-text-field solo dense v-bind="this.$attrs" ref="code" label="" v-mask="mask" placeholder="hh:mm" v-on:input="$emit('input', $event)" v-model="data"></v-text-field>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  props: {
    time: String,
  },
  directives: {
    mask,
  },
  data: () => ({
    data: '',
    menu: false,
    mask: 'XX:XX',
  }),

  methods: {
    updated(value) {
      if (value) {
        this.$emit('update:time', this.data)
      } else {
        this.$emit('update:time', '')
      }
      this.menu = false
    },
    reset() {
      if (this.time) {
        this.data = ''
      }
    },
  },
  created() {
    this.reset()
  },
  watch: {
    data() {
      this.updated(this.data)
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
