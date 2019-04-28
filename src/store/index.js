import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    countryinput: 'Finland'
  },
  actions: {

  },
  mutations: {
    // saveInput (state, countryinput) {
    //   state.countryinput = countryinput
    // },
    SET_TEXT(state, text) {
      state.text = text
    },
    CHANGE_VIS(state) {
      state.visible = !state.visible
    }
  }
})
