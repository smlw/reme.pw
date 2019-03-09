import Axios from 'axios'

const state = {
  user: null
}

const actions = {
  authVkontakte: async ({commit}) => {
    const {data} = await Axios.get('http://localhost:3001/', {
      withCredentials: true
    })

    commit('authVkontakte', data.user)
  }
}

const mutations = {
  authVkontakte: (state, payload) => {
    state.user = payload
  }
}

const getters = {
  getUser: state => {
    return state.user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
