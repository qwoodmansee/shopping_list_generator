import Vue from 'nativescript-vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage/LandingPage.nativescript'

Vue.use(VueRouter)

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/',
      component: LandingPage,
      meta: {
        title: 'Landing Page'
      }
    },
    {path: '*', redirect: '/'}
  ]
})

router.replace('/')

module.exports = router
