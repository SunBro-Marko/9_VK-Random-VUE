import Vue from 'vue'

const module = {
  state: {
    urlinput: '',
    post: {
      postData: '',
      Isfetched: false,
      IsLoaded: false,
      FetchFailed: false,
    },
  },
  actions: {
    async getPost({ commit, state, post }) {
      try {
        commit('winnersStateOff')
        commit('postfetched')
        const url = state.urlinput
        const res = await fetch(`/api/getpost/?url=${url}`)
        if (res.status === 501) {
          const err = await res.json()
          commit('postfetchfailed')
          Vue.notify({
            group: 'foo',
            type: 'warn',
            title: 'Всё пошло по бороде !',
            text: err,
          })
        } else {
          const postinfo = await res.json()          
          commit('postloaded', postinfo.post)
          Vue.notify({
            group: 'foo',
            title: 'Запрос прошёл успешно !',
            text: 'Пост для розыгрыша загружен, возрадуйтесь кабанчеги',
          })
        }
      } catch (e) {
        commit('postfetchfailed')
      }
    },
  },
  mutations: {
    postfetched(state) {
      state.post.Isfetched = true
      state.post.IsLoaded = false
      state.post.FetchFailed = false
    },

    postloaded(state, payload = null) {
      state.post.Isfetched = false
      state.post.IsLoaded = true
      state.post.Data = payload
    },

    postfetchfailed(state) {
      state.post.Isfetched = false
      state.post.IsLoaded = false
      state.post.FetchFailed = true
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
