import Vue from 'vue'
import App from './App.vue'
import './css/global.less'
import 'font-awesome/css/font-awesome.css'
import './assets/function'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
