<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',

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
@-webkit-keyframes autofill {
  0%,
  100% {
    color: #1e1e1e !important;
    background: transparent;
  }
}

input:-webkit-autofill {
  -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
  -webkit-animation-name: autofill;
  -webkit-animation-fill-mode: both;
}
</style>
