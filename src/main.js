import Vue from "vue";
import App from "./App.vue";
import { capitalize, leadingZero } from "@/filters";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
Vue.config.productionTip = false;
Vue.filter("capitalize", capitalize);
Vue.filter("leadingZero", leadingZero);
Vue.use(VueSpinners);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
