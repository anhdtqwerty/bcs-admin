<template>
  <div>
    <v-tabs>
      <v-tab>All Polls</v-tab>
      <v-tab>New Pools</v-tab>
    </v-tabs>
    <v-data-table :headers="headers" :items="pools">
      <template v-slot:item.teachers="{item}">
        <user-item :teacher="item.teachers[0]" :to="'teacher/' + item.id"></user-item>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import PoolNameImage from 'src/components/PoolNameImage.vue'
export default {
  components: {PoolNameImage},
  async created() {
    await this.fetchPools()
  },
  computed: {
    ...mapState('fixedPools', ['pools']),
  },
  data() {
    return {
      headers: [
        {
          text: 'Pool Name',
          value: 'name',
          align: 'left',
          sortable: true,
          show: true,
        },
        {
          text: 'Ratio',
          value: 'ratio',
          sortable: false,
          show: true,
        },
        {
          text: 'Access',
          value: 'access',
          align: 'center',
          sortable: false,
          show: true,
        },
        {
          text: 'Status',
          value: 'status',
          align: 'center',
          sortable: false,
          show: true,
        },

        {
          text: 'Hàng động',
          value: 'action',
          align: 'center',
          sortable: false,
          show: true,
        },
      ],
    }
  },
  methods: {
    ...mapActions('fixedPools', ['fetchPools']),
  },
}
</script>
