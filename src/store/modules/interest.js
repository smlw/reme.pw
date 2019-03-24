import Axios from 'axios'

const state = {
  interests: []
}

const actions = {
  loadInterests: async ({commit}, profileID) => {
    console.log(profileID)
    const {data} = await Axios.get('http://localhost:3001/api/interest/' + profileID, {
      withCredentials: true
    })

    if (data.interests) {
      console.log(data.interests)
      commit('loadInterests', data.interests.interest)
    }
  },
  removeChip: async ({commit, dispatch}, payload) => {
    const {data} = await Axios.post('http://localhost:3001/api/interest/remove', payload, {
      withCredentials: true
    })

    if (data) {
      commit('removeChip', payload)
    }
  },
  addChip: async ({commit}, payload) => {
    const {data} = await Axios.post('http://localhost:3001/api/interest/add', payload, {
      withCredentials: true
    })

    if (data) {
      console.log(data)
      console.log(payload)
      commit('addChip', payload)
    }
  }
}

const mutations = {
  removeChip: (state, payload) => {
    console.log('from mut')
    state.interests.find(i => {
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
  addChip: (state, payload) => {
    console.log('add')
    console.log(payload)
    state.interests.find(i => {
      if (i._id === payload.interestID) {
        i.chips.push({chipName: payload.chipText})
      }
    })
  },
  loadInterests: (state, payload) => {
    state.interests = payload
  }
}

const getters = {
  getInterests: state => {
    return state.interests
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
