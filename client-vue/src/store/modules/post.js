const module = {
  state: {
    urlinput: '',
    post: {
      postData: '',
      postIsfetched: false,
      postIsLoaded: false,
      postFetchFailde:false,
    },

    winners: {
      winnersData: '',
      winnersIsfetched: false,
      winnersIsLoaded: false,
    },
  },
  actions: {
    async getPost({ commit, state }) {      
      try {
      commit('postfetched')
      const url = state.urlinput
      const res = await fetch(`/api/getpost/?url=${url}`)
      const postinfo = await res.json()  
      commit('postfetched',postinfo)        
      } catch (e) {
        console.log(e)
        state.post.postFetchFailde.true  
      } 
    },
  },
  mutations: {
    postfetched(state,payload=null){
      if(state.post.postIsfetched===false){
        state.post.postIsfetched=true
        state.post.postIsLoaded=false
      }
      else{
        state.post.postIsfetched=false
        state.post.postIsLoaded=true
        state.post.postData=payload
      }
    },
    
    updateurl(state, url) {
      state.urlinput = url
    },
  },
  getters: {
    getUrl(state) {
      return state.urlinput
    },
    getPostState(state) {
      return state.post
    },
  },
}

export default module
