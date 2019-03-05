const state = {
  profiles: [
    { id: 1, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', age: '20', profession: 'Студент' },
    { id: 2, title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', age: '21', profession: 'Врач' },
    { id: 3, title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', age: '20', profession: 'Слесарь' },
    { id: 4, title: 'Ali2d Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', age: '18', profession: 'Педагог' }
  ]
}

const actions = {}

const mutations = {}

const getters = {
  getProfiles: state => {
    return state.profiles
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
