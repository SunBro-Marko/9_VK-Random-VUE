const module = {
    state: {
      AuthState: 'false'
    },
    actions: {
      async getUserAuthState(ctx) {
        const res = await fetch("api/session");
        const NewState = await res.json();
        console.log(`Запрос отработал выдал новый стэйт:${NewState.AuthState}`);
  
        ctx.commit("UpdateUserAuthState", NewState.AuthState);
      },
    },
    mutations: {
      UpdateUserAuthState(state, newState) {
        state.AuthState = newState;
        console.log(`Запрос отработал записал новый стэйт:${newState}`);
      },
    },
    getters: {
      getAuthState(state) {
        
        return state.AuthState;
      },
      getUserDate(state) {
        return state.user;
      },
    },
  };

  async function getState(){
    const res = await fetch("api/session");
    const NewState = await res.json();
    return await NewState.AuthState
  }

export default module