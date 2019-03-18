// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMasonry from 'vue-masonry-css'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import store from './store'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import VueCookie from 'vue-cookie'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css'

// ГЛОБАЛЬНО ПЕРЕД КАЖДЫМ ЗАПРОСОМ ПРОВЕРЯЕТ И УСТАНАВЛИВАЕТ -HEADERS-
// import interceptorsSetup from './config/helpers'

sync(store, router)

Vue.use(VueMasonry)
Vue.use(Vuetify, {
  iconfont: 'fa4'
})
Vue.use(Vuelidate)
Vue.use(Vuex)
Vue.use(VueCookie)

// ГЛОБАЛЬНО ПЕРЕД КАЖДЫМ ЗАПРОСОМ ПРОВЕРЯЕТ И УСТАНАВЛИВАЕТ -HEADERS-
// interceptorsSetup()

Vue.config.productionTip = false

/* eslint-disable no-new */
store.dispatch('getAuthUser').then(() => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})
