<template>
  <div>
    <v-tabs>
      <v-tab>All Polls</v-tab>
      <v-tab>New Pools</v-tab>
    </v-tabs>
    <v-data-table :headers="headers" :items="pools">
      <template v-slot:[`item.name`]="{item}">
        <PoolNameImage :pool="item"></PoolNameImage>
      </template>
      <template v-slot:[`item.status`]="{item}">
        <v-chip class="ma-2" color="pink" small label text-color="white">
          {{ item.status }}
        </v-chip>
      </template>
      <template v-slot:[`item.action`]="{item}">
        <v-menu bottom left>
          <template v-slot:activator="{on, attrs}">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="editPool(item)">Edit Pool</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="removePool(item)">Remove Pool</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="hidePool(item)">Hide</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="removeBot(item)">Go to contracts</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import PoolNameImage from '@/components/PoolNameImage.vue'
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
          text: 'Total Raise',
          value: 'totalRaise',
          sortable: false,
          show: true,
        },
        {
          text: 'Access',
          value: 'accessType',
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
    ...mapActions('fixedPools', ['fetchPools', 'removePool']),
  },
  async removePool(pool) {
    console.log(pool)
    this.$dialog.confirm({
      title: 'Remove Pool',
      text: 'Remove and clear pool on server?',
      okText: 'Yes! Remove Pool',
      cancelText: 'No',
      done: async () => {
        await this.removePool(pool.id)
      },
    })
  },
}
</script>
