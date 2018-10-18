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


Vue.use(MintUI,VueResource);
//引入头部
import { Header,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//轮播图


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})
