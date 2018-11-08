import Vue, { CreateElement } from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h: CreateElement) => h(App)
}).$mount("#app");
