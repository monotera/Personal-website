import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuex from "vuex";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import { store } from "./store";
Vue.config.productionTip = false;
Vue.use(Vuex);


new Vue({
  vuetify,
  Vuex,
  store,
  render: (h) => h(App),
}).$mount("#app");
