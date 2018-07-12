import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'
import VueSession from 'vue-session'

require('../node_modules/bulma/css/bulma.css')

var options = {
  persist: true
}
Vue.use(VueSession, options)

Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
