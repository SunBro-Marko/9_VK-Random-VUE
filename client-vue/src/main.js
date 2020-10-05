import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

new Vue({
  store,
  router,  
  render: h => h(App)
}).$mount('#app')

