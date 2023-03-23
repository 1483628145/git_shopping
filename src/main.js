import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 引入路由
  router,
  store,
  render: h => h(App)
}).$mount('#app')
