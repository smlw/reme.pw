import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Dashboard from '@/pages/Dashboard'

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
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
