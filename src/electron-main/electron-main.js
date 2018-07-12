import Vue from 'vue'
import axios from 'axios'

import App from '../renderer/App.electron'
import router from '../renderer/router/index.electron'
import store from '../renderer/store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
