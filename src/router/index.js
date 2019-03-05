import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Dashboard from '@/pages/Dashboard'
import AddProfile from '@/pages/AddProfile'
import ViewProfile from '@/pages/ViewProfile'

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
    },
    {
      name: 'add profile',
      path: '/add',
      component: AddProfile
    },
    {
      name: 'view profile',
      path: '/profile/:id',
      component: ViewProfile,
      children: [
        {
          name: 'edit profile',
          path: 'edit'
        }
      ]
    }
  ]
})
