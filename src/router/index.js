import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '@/components/HomeContainer'
import MemberContainer from '@/components/MemberContainer'
import ShopCarContainer from '@/components/ShopCarContainer'
import SearchContainer from '@/components/SearchContainer'
import NewsList from '@/components/news/NewsList.vue'//导入新闻资讯
import NewsInfo from '@/components/news/NewsInfo.vue'//导入新闻跳转页
import PhotoList from '@/components/photos/PhotoList.vue' //导入图片分享


 

export default new VueRouter({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component:NewsList},
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList }
  ],
  linkActiveClass:"mui-active"
})
