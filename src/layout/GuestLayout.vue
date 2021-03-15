<template>
  <v-app>
    <plugin-confirm-dialog />
    <v-main>
      <plugin-alert />
      <plugin-loading />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import PluginConfirmDialog from '@/components/plugin/PluginConfirmDialog'
import PluginAlert from '@/components/plugin/PluginAlert'
import PluginLoading from '@/components/plugin/PluginLoading'

export default {
  components: {
    PluginConfirmDialog,
    PluginAlert,
    PluginLoading,
  },
  data() {
    return {
      drawer: true,
      mini: true,
    }
  },
  created() {
    if (this.isDesktop) this.drawer = true
  },
  computed: {
    ...mapGetters('auth', ['user', 'profile', 'isAuthenticated']),
    simpleLayout() {
      const {meta = {}, matched = []} = this.$route
      return meta.auth === false || matched.some((route) => route.meta.auth === false)
    },
    isDesktop() {
      return true
    },
  },
  methods: {},
}
</script>
