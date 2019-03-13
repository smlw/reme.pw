import Axios from 'axios'

const state = {
  user: null
}

const actions = {
  getAuthUser: async ({commit}) => {
    const {data} = await Axios.get('http://localhost:3001/api/getUserProfile', {
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
