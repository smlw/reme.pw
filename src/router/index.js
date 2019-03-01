import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Dashboard from '@/pages/Dashboard'
// import Profile from '@/pages/Profile'
// import AddProfile from '@/pages/AddProfile'
// import Id from '@/pages/_id'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard
    }
  ]
})
