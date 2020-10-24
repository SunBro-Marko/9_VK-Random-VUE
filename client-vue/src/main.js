import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import Notifications from 'vue-notification'
import vueHeadful from 'vue-headful';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Notifications)
Vue.component('vue-headful', vueHeadful);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  store,
  router,  
  render: h => h(App)
}).$mount('#app')

