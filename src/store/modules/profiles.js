import Axios from 'axios'

const state = {
  profiles: [
    { id: '1', fullName: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', age: '20', profession: 'Студент' },
    { id: '2', fullName: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', age: '21', profession: 'Врач' },
    { id: '3', fullName: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', age: '20', profession: 'Слесарь' },
    { id: '4', fullName: 'Ali2d Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', age: '18', profession: 'Педагог' }
  ]
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
  loadProfiles: async ({commit}) => {
    try {
      const {data} = await Axios.get('http://127.0.0.1:3001/api/profile/', {
        params: {
          owner: 1
        }
      })
      console.log(data)
      commit('loadProfiles', data.profiles)
    } catch (error) {
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
  }
}

const getters = {
  getProfiles: state => {
    return state.profiles
  },
  getOneProfile: (state, getters, rootState) => {
    return getters.getProfiles.filter(profile => {
      return profile.id === rootState.route.params.id
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
