import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import { router } from "@/router/index"
import showMessage from "@/utils/showMessage";
Vue.config.productionTip = false

window.showMessage = showMessage;

var vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

console.log(vm)
