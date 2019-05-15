
import Vue from 'vue'
import App from './App'
import router from './router'
import Form from './components/Form.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
