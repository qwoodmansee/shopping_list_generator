import Vue from 'nativescript-vue'

import router from '../renderer/router/index.nativescript'

import store from '../renderer/store/index.nativescript'

import './nativescript-styles.scss'

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false
Vue.registerElement('CardView', () => require('nativescript-cardview').CardView)

new Vue({

  router,

  store

}).$start()
