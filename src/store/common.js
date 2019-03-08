const state = {
  loading: false,
  error: null
}

const actions = {
  setLoading: ({commit}, payload) => {
    commit('setLoading', payload)
  },
  setError: ({commit}, payload) => {
    commit('setError', payload)
  },
  clearError: ({commit}) => {
    commit('clearError')
  }
}

const mutations = {
  setLoading: (state, payload) => {
    state.loading = payload
  },
  setError: (state, payload) => {
    state.error = payload
  },
  clearError: (state) => {
    state.error = null
  }
}

const getters = {
  loading: (state) => {
    return state.loading
  },
  error: (state) => {
    return state.error
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
