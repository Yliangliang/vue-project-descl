// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App.vue'
import Vue from 'vue'
// import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import VueResource from 'vue-resource'
import moment from 'moment' //导入时间格式化组件库momet
import { Header, Swipe, SwipeItem } from 'mint-ui';
import VueRouter from 'vue-router'
import router from './router/index.js'


Vue.use(VueResource);
Vue.use(MintUI);
Vue.use(VueRouter)


Vue.component(Header.name, Header);//引入头部
Vue.component(Swipe.name, Swipe);//引入轮播图
Vue.component(SwipeItem.name, SwipeItem);//引入轮播图
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){//定义时间格式化全局过滤器
  return moment(dateStr).format(pattern)
})

 Vue.http.options.root="http://027xin.com:8899"
 // Vue.http.options.root = "http://vue.studyit.io"






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
//   mounted() {
//   // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
//   mui(".mui-scroll-wrapper").scroll({
//     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
//   });
// }
  
})

