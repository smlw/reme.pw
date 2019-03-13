import Axios from 'axios'

const state = {
  user: null
}

const actions = {
  getUserProfile: async ({commit}, sessionUUID) => {
    let config = {
      headers: {
        'content-type': 'application/json'
      },
      withCredentials: true
    }
    let params = {
      sessionUUID: sessionUUID
    }

    const {data} = await Axios.post('http://localhost:3001/getUserInfo', params, config)

    commit('getUserProfile', data)
  }
}

const mutations = {
  getUserProfile: (state, payload) => {
    state.user = payload
  }
}

const getters = {
  getUserProfile: state => {
    return state.user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
