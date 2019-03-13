import Axios from 'axios'

const state = {
  profiles: [],
  profile: null
}

const actions = {
  // Заводим новый профайл
  newProfile: async ({commit, dispatch}, payload) => {
    commit('clearError')
    commit('clearMessage')
    commit('setLoading', true)
    try {
      const {data} = await Axios.post('http://localhost:3001/api/profile/add', payload, {
        withCredentials: true
      })

      dispatch('loadProfiles')
      commit('setLoading', false)
      commit('setMessage', data.message)
    } catch (error) {
      commit('setLoading', false)
      commit('setError', error.message)
      throw error
    }
  },
  // Загружаем один профайл по id
  loadProfileOnce: async ({commit}, id) => {
    commit('clearError')
    commit('clearMessage')
    commit('setLoading', true)
    try {
      const {data} = await Axios.get('http://localhost:3001/api/profile/' + id, {
        withCredentials: true
      })

      commit('loadProfileOnce', data)
      commit('setLoading', false)
    } catch (error) {
      commit('setLoading', false)
      commit('setError', error.message)
      throw error
    }
  },
  // Загружаем профайлы на dashboard
  loadProfiles: async ({commit}) => {
    commit('clearError')
    commit('clearMessage')
    commit('setLoading', true)
    try {
      const {data} = await Axios.get('http://localhost:3001/api/profile/', {
        withCredentials: true
      })

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
