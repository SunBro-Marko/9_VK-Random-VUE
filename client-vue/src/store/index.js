import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import moduleAuth from "./modules/auth";
import modulePost from "./modules/post";
import moduleWinners from "./modules/winners"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {    
    moduleAuth,
    modulePost,
    moduleWinners,
  },
  plugins: [createPersistedState()]
});

export default store


