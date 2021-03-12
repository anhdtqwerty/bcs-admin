<template>
  <v-navigation-drawer app permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item link to="/fixed-pools">
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Fixed Pools</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-spacer />

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="signOut()">
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {title: 'Home', icon: 'mdi-view-dashboard'},
        {title: 'About', icon: 'mdi-forum'},
      ],
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('auth/signOut')
    },
  },
}
</script>
