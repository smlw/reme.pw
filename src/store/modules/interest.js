// import Axios from 'axios'

const state = {
  interests: [
    {
      id: 1,
      name: 'Музыка',
      icon: 'fa-music',
      color: 'indigo',
      textColor: 'white',
      chips: [
        { id: 'aaa', chipName: 'Инди', color: 'indigo', close: false, isActual: true },
        { id: 'bbb', chipName: 'Шансон', color: 'indigo', close: false, isActual: true }
      ]
    },
    {
      id: 2,
      name: 'Кино, видео TV',
      icon: 'fa-film',
      color: 'orange',
      textColor: 'white',
      chips: [
        { id: 'ccc', chipName: 'Ужасы', color: 'orange', close: false, isActual: true },
        { id: 'vvv', chipName: 'Мелодраммы', color: 'orange', close: false, isActual: true }
      ]
    },
    {
      id: 3,
      name: 'Отдых и путещевсвтия',
      icon: 'fa-globe',
      color: 'cyan darken-2',
      textColor: 'white',
      chips: [
        { id: 'qqq', chipName: 'Австралия', color: 'cyan darken-2', close: false, isActual: true },
        { id: 'ddd', chipName: 'Уганда', color: 'cyan darken-2', close: false, isActual: true },
        { id: 'nnn', chipName: 'Индонезия', color: 'cyan darken-2', close: false, isActual: true },
        { id: 'lll', chipName: 'Ямайка', color: 'cyan darken-2', close: false, isActual: true }
      ]
    }
  ]
}

const actions = {
  toggleEdit: ({commit}) => {
    commit('toggleEdit')
  },
  addChip: ({commit}, payload) => {
    commit('addChip')
  },
  removeInterest: ({commit}, payload) => {
    commit('removeInterest')
  },
  addInterest: ({commit}, payload) => {
    commit('addInterest')
  }
}

const mutations = {
  toggleEdit: (state, payload) => {
    state.interests.forEach(i => {
      i.chips.forEach(c => {
        c.close = !c.close
      })
    })
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
