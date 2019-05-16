// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$axios= axios
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant);
require('./mock/index');

//引入顶部可触摸滑动具有回弹效果
import LyTab from 'ly-tab'

Vue.use(LyTab);

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.filter('moneyFormat',money=>{
  return '$' + money + '.00元'
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
