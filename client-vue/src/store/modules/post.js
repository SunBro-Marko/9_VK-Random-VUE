const module = {
  state: {
    urlinput: '',
    post: {
      postData: '',
      Isfetched: false,
      IsLoaded: false,
      FetchFailde:false,
    },

  },
  actions: {
    async getPost({ commit, state, winners }) {      
      try {
      commit('winnersStateOff')  
      commit('postfetched')
      const url = state.urlinput
      const res = await fetch(`/api/getpost/?url=${url}`)
      const postinfo = await res.json()
      console.log(postinfo)  
      commit('postfetched',postinfo.post)        
      } catch (e) {
        console.log(e)
        state.post.FetchFailde.true  
      } 
    },
  },
  mutations: {
    postfetched(state,payload=null){
      if(state.post.Isfetched===false){
        state.post.Isfetched=true
        state.post.IsLoaded=false
      }
      else{
        state.post.Isfetched=false
        state.post.IsLoaded=true
        state.post.Data=payload
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
