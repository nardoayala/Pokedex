import Vue from "vue";
import App from "./App.vue";
import { capitalize } from "@/filters";

import router from "@/router";
Vue.config.productionTip = false;
Vue.filter("capitalize", capitalize);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
