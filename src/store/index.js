// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios';
//
// Vue.use(Vuex)
//
// export const store = new Vuex.Store({
//   state: {
//     msg: '',
//     countries: '',
//     countryinput: '',
//     visible: true,
//   },
//   actions: {
//     getMessage ({ commit }) {
//       axios
//         .get('http://localhost:5000/api/countries')
//         .then(r => {
//           commit('SET_TEXT', r.data.countries[0])
//         })
//     },
//   },
//   mutations: {
//     SET_TEXT(state, msg) {
//       state.msg = msg
//     },
//     CHANGE_VIS(state) {
//       state.visible = !state.visible
//     }
//   }
// })
