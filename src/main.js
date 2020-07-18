import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueZoomer from "vue-zoomer"

Vue.config.productionTip = false;
Vue.use(VueZoomer);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");