const state = {
  loading: false,
  error: null,
  message: null
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
  },
  clearMessage: ({commit}) => {
    commit('clearMessage')
  },
  setMessage: ({commit}, payload) => {
    commit('setMessage')
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
  },
  clearMessage: (state) => {
    state.message = null
  },
  setMessage: (state, payload) => {
    state.message = payload
  }
}

const getters = {
  loading: (state) => {
    return state.loading
  },
  error: (state) => {
    return state.error
  },
  message: (state) => {
    return state.message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
