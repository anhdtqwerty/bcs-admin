import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
//----------- PLUGINS----------------------
import PluginHelper from '@/helpers/PluginHelper'
import dialog from '@/plugins/dialog'
import loading from '@/plugins/loading'
import alert from '@/plugins/alert'
import {inputRules} from '@/plugins/rule'
import moment from 'moment'

Vue.config.productionTip = false
import utils from '@/plugins/utils'
Vue.use(
  PluginHelper.create({
    $utils: utils,
    $rules: inputRules,
    $dialog: dialog,
    $alert: alert,
    $loading: loading,
    $baseUrl: process.env.VUE_APP_API_ENDPOINT,
    $moment: moment,
  })
)
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
