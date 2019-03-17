import Axios from 'axios'

const state = {
  user: null,
  token: localStorage.getItem('access_token') || null
}

const actions = {
  logout: async ({commit}) => {
    await Axios.get('http://localhost:3001/api/user/logout', {
      withCredentials: true
    })

    commit('logout')
  },
  getAuthUser: async ({commit}) => {
    const {data} = await Axios.get('http://localhost:3001/api/user/getUserProfile', {
      withCredentials: true
    })

    if (data.user) {
      commit('setAuthUser', data.user)
    }
  }
}

const mutations = {
  setAuthUser: (state, payload) => {
    state.user = payload
  },
  logout: state => {
    state.user = null
  }
}

const getters = {
  getAuthUser: state => {
    return state.user
  },
  checkUser (state) {
    return state.user !== null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
