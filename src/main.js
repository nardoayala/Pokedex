import Vue from "vue";
import App from "./App.vue";
import { capitalize } from "@/filters";

Vue.config.productionTip = false;
Vue.filter("capitalize", capitalize);

new Vue({
  render: h => h(App)
}).$mount("#app");
