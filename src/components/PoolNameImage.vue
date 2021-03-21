<template>
  <div class="d-flex flex-row align-center pa-1" style="flex-wrap: wrap" :key="pool.id" @click="$emit('change', pool)">
    <div class="ma-2 d-flex align-center justify-center">
      <img :src="file" alt="" />
    </div>
    <div style="white-space: nowrap">{{ pool.name }}</div>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  props: {
    pool: Object,
    prepend: Object,
    append: Object,
    attendance: Object,
    link: Boolean,
  },
  computed: {
    file() {
      return this.$baseUrl + _.get(this.pool, 'file.url', '/default-avatar.png')
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 48px;
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
</style>
