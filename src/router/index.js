import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import AddProfile from '@/pages/AddProfile'
import Id from '@/pages/_id'

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
      name: 'profile',
      path: '/profile',
      component: Profile,
      redirect: '/profile/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'add',
          name: 'add-profile',
          component: AddProfile
        },
        {
          path: ':id',
          name: 'id',
          component: Id
        }
      ]
    }
  ]
})
