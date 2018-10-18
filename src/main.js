// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(MintUI);

import { Header,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);//引入头部
Vue.component(Swipe.name, Swipe);//引入轮播图
Vue.component(SwipeItem.name, SwipeItem);//引入轮播图

vue.http.options.root="http://027xin.com:8899/api/getlunbo"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})
