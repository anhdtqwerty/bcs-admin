<template>
  <div class="d-flex flex-row align-center pa-1" style="flex-wrap: wrap" :key="pool.id" @click="$emit('change', pool)">
    <div class="image-wrapper mr-5 mb-3">
      <img :src="file" alt="" />
    </div>
    <div style="font-size: 18px; color: #000000">
      <router-link v-if="link" :to="'/pool/' + pool.id">
        <div style="white-space: nowrap">{{ pool.name }}</div>
      </router-link>
      <div style="white-space: nowrap" v-else>{{ pool.name }}</div>
    </div>
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
      return _.get(this.pool, 'file.url', '/default-file.png')
    },
  },
}
</script>

<style lang="scss" scoped>
.image-wrapper {
  width: 140px;
  min-width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
