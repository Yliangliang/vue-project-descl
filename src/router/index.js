import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from '@/components/HomeContainer'
import MemberContainer from '@/components/MemberContainer'
import ShopCarContainer from '@/components/ShopCarContainer'
import SearchContainer from '@/components/SearchContainer'
import NewsList from '@/components/news/NewsList.vue'//导入新闻资讯
import NewsInfo from '@/components/news/NewsInfo.vue'//导入新闻跳转页
import PhotoList from '@/components/photos/PhotoList.vue' //导入图片分享
import PhotoInfo from '@/components/photos/PhotoInfo.vue'
import GoodsList from '@/components/goods/GoodsList.vue'
import GoodsInfo from '@/components/goods/GoodsInfo.vue'
import GoodsDesc from '@/components/goods/GoodsDesc.vue'
import GoodsComment from '@/components/goods/GoodsComment.vue'




 

export default new VueRouter({
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component:NewsList},
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo },
    { path: '/goods/goodsdesc/:id', component: GoodsDesc,name:'goodsdesc'},
    { path: '/goods/goodscomment/:id',component: GoodsComment,name:'goodscomment'}
  ],
  linkActiveClass:"mui-active"
})
