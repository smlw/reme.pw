import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Index from '@/pages/Index'
import Dashboard from '@/pages/Dashboard'
import AddProfile from '@/pages/AddProfile'
import ViewProfile from '@/pages/ViewProfile'
import Auth from '@/pages/Auth'

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
      component: Dashboard,
      beforeEnter (to, from, next) {
        store.getters.getUser ? next() : next('/auth')
      }
    },
    {
      name: 'add profile',
      path: '/add',
      component: AddProfile,
      beforeEnter (to, from, next) {
        store.getters.getUser ? next() : next('/auth')
      }
    },
    {
      name: 'view profile',
      path: '/profile/:id',
      component: ViewProfile,
      beforeEnter (to, from, next) {
        store.getters.getUser ? next() : next('/auth')
      },
      children: [
        {
          name: 'edit profile',
          path: 'edit'
        }
      ]
    },
    {
      name: 'auth',
      path: '/auth',
      component: Auth
    }
  ]
})
