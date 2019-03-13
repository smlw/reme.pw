import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

const Index = () => import('@/pages/Index')
const Dashboard = () => import('@/pages/Dashboard')
const AddProfile = () => import('@/pages/AddProfile')
const ViewProfile = () => import('@/pages/ViewProfile')
const Auth = () => import('@/pages/Auth')

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
