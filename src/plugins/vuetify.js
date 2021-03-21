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
        primary: '#2196F3',
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: '#F5BA03',
        accent: '#2196F3',
        red: '#E6344A',
        yellow: '#F5BA03',
        green: '#1DD692',
        success: '#1DD692',
      },
    },
  },
})
