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
        const winners = await res.json()
        commit('winnersfetched', winners)
      } catch (e) {
        console.log(e)
        state.winners.FetchFailde=true
      }
    },
  },
  mutations: {
    winnersfetched(state, payload = null) {
      if (state.winners.Isfetched === false) {
        state.winners.Isfetched = true
        state.winners.IsLoaded = false
      } else {
        state.winners.Isfetched = false
        state.winners.IsLoaded = true
        state.winners.Data = payload
      }
    },

    winnersStateOff(state){
        state.winners.IsLoaded=false
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
