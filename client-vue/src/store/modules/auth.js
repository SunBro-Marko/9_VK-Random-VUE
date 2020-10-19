const module = {
  state: {
    AuthState: 'false',
    user: {
      UserName: '',
      UserPhoto: '',
      UserUrl: '',
    },
  },
  actions: {
    async getUserAuthState(ctx) {
      const res = await fetch('api/session')
      const NewState = await res.json()
      console.log(`Запрос отработал выдал новый стэйт:${NewState}`)

      ctx.commit('UpdateUserAuthState', NewState)
    },
  },
  mutations: {
    UpdateUserAuthState(state, newState) {
      state.AuthState = newState.AuthState
      state.user.UserName = newState.vk_displayName
      state.user.UserPhoto = newState.vk_photo
      state.user.UserUrl = newState.vk_profileUrl
      console.log(`Запрос отработал записал новый стэйт:${newState}`)
    }    
  },
  getters: {
    getAuthState(state) {
      return state.AuthState
    },

    getUserDate(state) {
      return state.user
    },
  },
}

export default module
