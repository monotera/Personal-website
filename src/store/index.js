import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dark_mode: false,
  },
  mutations: {
    changeMode(state) {
      state.dark_mode = state.dark_mode ? false : true;
    },
  },
  getters: {
    getDarko_mode(state) {
      return state.dark_mode;
    },
  },
});
