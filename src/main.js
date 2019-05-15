// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 'bootstrap/dist/css/bootstrap.css';
//import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { store } from './store/index'
import CO2 from './components/CO2.vue'
import Form from './components/Form.vue'

Vue.config.productionTip = false

//Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
