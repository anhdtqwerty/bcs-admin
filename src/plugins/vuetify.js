import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
import colors from 'vuetify/lib/util/colors'
export default new Vuetify({
  theme: {
    dark: true,
    icons: {
      font: true,
      icons: 'md',
    },
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {},
    },
  },
})
