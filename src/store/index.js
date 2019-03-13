import Vue from 'vue'
import Vuex from 'vuex'

import profile from './modules/profile'
import user from './modules/user'
import common from './common'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common,
    profile,
    user
  },
  strict: debug
})
