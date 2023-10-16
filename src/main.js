/*
 * @Author: HuangBingQuan <17671241237@163.com>
 * @Date: 2023-09-05 18:52:05
 * @LastEditTime: 2023-09-30 21:35:54
 * @FilePath: /mySite/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import { router } from "@/router/index"
import "@/mock"
import showMessage from "@/utils/showMessage";
import $http from "@/service"
Vue.prototype.$http = $http;

Vue.config.productionTip = false

window.showMessage = showMessage;

// 注册全局指令
import vLoading from './directive/v-loading';
import vFocus from './directive/v-focus';

Vue.directive("loading", vLoading);
Vue.directive("focus", vFocus);
var vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

console.log(vm)

import * as blog from "@/service/blog";
blog.getBlogTypes().then(r => {
  console.log(r)
})
blog.getBlogs(1, 10, 3).then(r => {
  console.log(r)
});