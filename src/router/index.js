import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

const Home = () => import('@/pages/Home')
const Dashboard = () => import('@/pages/Dashboard')
const AddProfile = () => import('@/pages/AddProfile')
const ViewProfile = () => import('@/pages/ViewProfile')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {title: 'Главная страница'}
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard,
      meta: {title: 'Профайлы', requireAuth: true}
    },
    {
      name: 'add profile',
      path: '/add',
      component: AddProfile,
      meta: {title: 'Добавить профайл', requireAuth: true}
    },
    {
      name: 'view profile',
      path: '/profile/:id',
      component: ViewProfile,
      meta: {title: 'Профайл', requireAuth: true},
      children: [
        {
          name: 'edit profile',
          path: 'edit'
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'home' && to.meta.requireAuth && !store.getters.checkUser) {
    next('/')
  } else {
    next()
  }
})

export default router
