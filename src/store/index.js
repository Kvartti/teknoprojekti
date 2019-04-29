import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

// const SET_COUNTRYINPUT = 'SET_COUNTRYINPUT'
//
// const store = {
//   state: function () {
//     let baseState = {
//       countryinput: 'Aruba'
//     }
//     return baseState
//   },
//
//   mutations: {
//     [SET_COUNTRYINPUT]: (state, { countryinput }) => {
//       state.countryinput = count
//
//       ryinput
//     }
//   },
//
//   actions: {
//     loadCountryinput ({commit}, formData ) {
//       axios.post('http://localhost:5000/countries', { formData}).then((response) => {
//         commit(SET_COUNTRYINPUT, {countryinput: response.countries.countries})
//       })
//
//     }
//   },
//
//   getters: {
//     countryinput: state => state.countryinput
//   }
// }
//
// export default new Vuex.Store(store)


export const store = new Vuex.Store({
  state: {
    //countryinput: '',
    selected: '',
  },
  actions: {

  },
  mutations: {
    // saveInput (state, countryinput) {
    //   state.countryinput = countryinput
    // },
    // SET_TEXT(state, text) {
    //   state.text = text
    // },
    // CHANGE_VIS(state) {
    //   state.visible = !state.visible
    // }
  },
  computed: {
    setcountryinput () {
      return this.$store.state.countryinput
    }
  }
})
