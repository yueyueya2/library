// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import echarts from 'echarts'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.prototype.$echarts=echarts;
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
