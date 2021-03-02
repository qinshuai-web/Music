// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import rem from './utils/rem'
import axios from 'axios'
import http from './http/api'
import './assets/incfont/iconfont.css' //全局注册iconfont
Vue.prototype.$axios = axios    //全局注册
Vue.config.productionTip = false
Vue.use(rem)
Vue.prototype.$http = http
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
