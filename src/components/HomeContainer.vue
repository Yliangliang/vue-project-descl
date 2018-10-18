<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in imageList" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>           
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/home/newslist">
                    <img src="../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>    
    </div>
</template>

<script>
// import { Toast } from "mint-ui";

export default {
  data() {
    return {
      imageList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    getLunbo() {
      // 获取轮播图数据的方法
      this.$http.get("http://027xin.com:8899/api/getlunbo").then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          // 成功了
          this.imageList = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    }
  }
};
    
</script>
<style lang="" scoped>
.mint-swipe{
    height:200px;
}
    .mint-swipe-item:nth-child(1){
            background-color:skyblue;
        }
    .mint-swipe-item:nth-child(2){
            background-color:orange;
        }
    .mint-swipe-item:nth-child(3){
            background-color:red;
        }
    

   
    
    
</style>