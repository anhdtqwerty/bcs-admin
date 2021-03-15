<template>
  <div>
    <span class="label theme--dark v-label">{{ $attrs.label }}</span>
    <v-text-field solo dense v-bind="this.$attrs" ref="code" label="" v-mask="mask" placeholder="DD/MM/YYYY" v-on:input="$emit('input', $event)" v-model="data"></v-text-field>
  </div>
</template>

<script>
import moment from 'moment'
import {mask} from 'vue-the-mask'
export default {
  props: {
    date: String,
    type: String,
  },
  directives: {
    mask,
  },
  data: () => ({
    data: '',
    mask: 'XX/XX/XXXX',
  }),

  methods: {
    updated(value) {
      if (this.type === 'normal') {
        return this.$emit('update:date', this.data)
      }
      if (value) {
        this.$emit('update:date', moment(this.data, 'DD/MM/YYYY').toISOString())
      } else {
        this.$emit('update:date', '')
      }
    },
    reset() {
      if (this.date) {
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
