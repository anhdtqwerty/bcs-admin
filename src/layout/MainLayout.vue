<template>
  <v-app>
    <plugin-confirm-dialog />
    <Navigation />
    <v-app-bar app>
      <v-toolbar-title class="display-1">Pools</v-toolbar-title>
    </v-app-bar>
    <v-main class="d-print-none">
      <plugin-alert />
      <plugin-loading />
      <v-container id="container" fluid grid-list-xl>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PluginConfirmDialog from '@/components/plugin/PluginConfirmDialog'
import PluginAlert from '@/components/plugin/PluginAlert'
import PluginLoading from '@/components/plugin/PluginLoading'
import Navigation from '@/components/NavigationDrawer.vue'
export default {
  components: {
    PluginConfirmDialog,
    PluginAlert,
    PluginLoading,
    Navigation,
  },
  data() {
    return {
      drawer: true,
    }
  },
  computed: {
    ...mapGetters('auth', ['user', 'profile', 'isAuthenticated']),
    ...mapGetters('app', ['users', 'department', 'roles']),
    simpleLayout() {
      const {meta = {}, matched = []} = this.$route
      return meta.auth === false || matched.some((route) => route.meta.auth === false)
    },
    isDesktop() {
      return true
    },
  },
  async created() {
    if (this.isAuthenticated) {
      await this.fetchProfile({user: this.user.id})
    }
  },
  methods: {
    ...mapActions('auth', ['fetchProfile']),
    toggleDrawer: function(updatedDrawer) {
      this.drawer = updatedDrawer
    },
  },
}
</script>
