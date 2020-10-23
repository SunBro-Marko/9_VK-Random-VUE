import Vue from 'vue'

const module = {
  state: {
    winners: {
      count: 3,
      Data: '',
      Isfetched: false,
      IsLoaded: false,
      FetchFailde: false,
    },
  },
  actions: {
    async getWinners({ commit, state }) {
      try {
        commit('winnersfetched')
        const count = state.winners.count
        const res = await fetch(`/api/ruffle/?count=${count}`)
        if (res.status === 501) {
          const err = await res.json()
          commit('winnersfetchfailed')
          Vue.notify({
            group: 'foo',
            type: 'warn',
            title: 'Всё пошло по пизде !',
            text: err,
          })
        } else {
          const winners = await res.json()
          commit('winnersloaded', winners)
          Vue.notify({
            group: 'foo',
            title: 'Запрос прошёл успешно !',
            text: 'Победители выбраны, возрадуйтесь кабанчеги',
          })
        }
      } catch (e) {
        console.log(e)  
      }
    },
  },
  mutations: {
    winnersfetched(state) {
      state.winners.Isfetched = true
      state.winners.IsLoaded = false
    },

    winnersloaded(state, payload = null) {
      state.winners.Isfetched = false
      state.winners.IsLoaded = true
      state.winners.Data = payload
    },

    winnersfetchfailed(state) {
      state.winners.Isfetched = false
      state.winners.IsLoaded = false
      state.winners.FetchFailed = true
    },

    winnersStateOff(state) {
      state.winners.IsLoaded = false
    },

    updateWinnersCount(state, count) {
      state.winners.count = count
    },
  },
  getters: {
    getWinnersCount(state) {
      return state.winners.count
    },
    getWinnersState(state) {
      return state.winners
    },
  },
}

export default module
