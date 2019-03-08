import Axios from 'axios'

const state = {
  profiles: [],
  profile: {}
}

const actions = {
  newProfile: async ({commit}, payload) => {
    try {
      await Axios.post('http://127.0.0.1:3001/api/profile/add', payload)

      commit('newProfile', payload)
    } catch (error) {
      throw error
    }
  },
  loadProfileOnce: async ({commit}, id) => {
    try {
      const {data} = await Axios.get('http://127.0.0.1:3001/api/profile/' + id)
      console.log(data)
      if (data) {
        commit('loadProfileOnce', data)
      } else {
        console.log('errorororo')
      }
    } catch (error) {
      throw error
    }
  },
  loadProfiles: async ({commit}) => {
    commit('clearError')
    commit('setLoading', true)
    try {
      const {data} = await Axios.get('http://127.0.0.1:3001/api/profiles/', {
        params: {
          owner: 1
        }
      })
      console.log(data)
      commit('loadProfiles', data.profiles)
      commit('setLoading', false)
    } catch (error) {
      commit('setLoading', false)
      commit('setError', error.message)
      throw error
    }
  }
}

const mutations = {
  newProfile: (state, payload) => {
    state.profiles.push(payload)
  },
  loadProfiles: (state, payload) => {
    state.profiles = payload
  },
  loadProfileOnce: (state, payload) => {
    state.profile = payload
  }
}

const getters = {
  getProfiles: state => {
    return state.profiles
  },
  getOneProfile: state => {
    return state.profile
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
