import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuex from 'vuex'
Vue.use(Vuex);
Vue.use(VueRouter);

var car = JSON.parse(localStorage.getItem('car')||'[]')
var store = new Vuex.Store({
  state: { // this.$store.state.***
    car: car
  },
  mutations: { // this.$store.commit('方法的名称', '按需传递唯一的参数')
    addToCar(state, goodsinfo) {
      var flag = false
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          falg = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters: { // this.$store.getters.***
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    }
  }
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App.vue'

// import router from './router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import VueResource from 'vue-resource'
import moment from 'moment' //导入时间格式化组件库momet
import { Header, Swipe, SwipeItem } from 'mint-ui';

import router from './router/index.js'
import VuePreview from 'vue-preview'



Vue.use(VueResource);
Vue.use(MintUi);

Vue.use(VuePreview);


Vue.component(Header.name, Header);//引入头部
Vue.component(Swipe.name, Swipe);//引入轮播图
Vue.component(SwipeItem.name, SwipeItem);//引入轮播图
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {//定义时间格式化全局过滤器
  return moment(dateStr).format(pattern)
})

Vue.http.options.root = "http://027xin.com:8899"
Vue.http.options.emulateJSON = true;





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
  //   mounted() {
  //   // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
  //   mui(".mui-scroll-wrapper").scroll({
  //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  //   });
  // }

})


