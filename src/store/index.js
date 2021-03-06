import Vue from 'vue'
import Vuex from 'vuex'

import common from './common'
import profile from './modules/profile'
import user from './modules/user'
import interest from './modules/interest'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common,
    profile,
    user,
    interest
  },
  strict: debug
})
