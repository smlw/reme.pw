import Axios from 'axios'

const state = {
  profiles: null,
  oneProfile: null
}

const actions = {
  removeChip: async ({commit, dispatch}, payload) => {
    const {data} = await Axios.post('http://localhost:3001/api/interest/remove', payload, {
      withCredentials: true
    })

    if (data) {
      commit('removeChip', payload)
    }
  },
  addChip: async ({commit}, payload) => {
    console.log(payload)
  },
  // Заводим новый профайл
  newProfile: async ({commit, dispatch}, payload) => {
    commit('clearError')
    commit('clearMessage')
    commit('setLoading', true)
    try {
      const {data} = await Axios.post('http://localhost:3001/api/profile/add', payload, {
        withCredentials: true
      })

      if (data) {
        dispatch('loadProfiles')
        commit('setMessage', data.message)
      }
      commit('setLoading', false)
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
      if (data.profile) {
        console.log(data.profile)
        commit('loadProfileOnce', data.profile)
        commit('setMessage', data.message)
      }
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

      if (data.profiles) {
        commit('loadProfiles', data.profiles)
        commit('setMessage', data.message)
      }
      commit('setLoading', false)
    } catch (error) {
      commit('setLoading', false)
      commit('setError', error.message)
      throw error
    }
  }
}

const mutations = {
  removeChip: (state, payload) => {
    console.log('from mut')
    state.oneProfile.interest.interest.find(i => {
      if (i._id === payload.interestID) {
        console.log(i)
        i.chips.find(chip => {
          if (chip._id === payload.chipID) {
            chip.isActual = false
          }
        })
      }
    })
  },
  loadProfiles: (state, payload) => {
    state.profiles = payload
  },
  loadProfileOnce: (state, payload) => {
    // state.oneProfile = payload
    state.oneProfile = Object.assign({}, state.oneProfile, payload)
  }
}

const getters = {
  getProfiles: (state) => {
    return state.profiles
  },
  getOneProfile: (state) => {
    return state.oneProfile
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
