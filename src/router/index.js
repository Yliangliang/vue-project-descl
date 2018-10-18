import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/HomeContainer'
import MemberContainer from '@/components/MemberContainer'
import ShopCarContainer from '@/components/ShopCarContainer'
import SearchContainer from '@/components/SearchContainer'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer }
  ],
  linkActiveClass:"mui-active"
})
