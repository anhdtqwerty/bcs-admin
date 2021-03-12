<template>
  <v-app>
    <v-main>
      <Navigation />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/NavigationDrawer.vue'
export default {
  name: 'App',

  components: {Navigation},

  data: () => ({
    //
  }),
}
</script>
<style>
.v-text-field .v-input__control,
.v-text-field .v-input__slot,
.v-text-field fieldset {
  border-radius: 8px !important;
}
.no-gutters > .col,
.no-gutters > [class*='col-'] {
  padding: 8px !important;
}
</style>
