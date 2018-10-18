
<template>
    <div> 
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="https://gitee.com/uploads/71/556171_UniverseKing.jpg?1457705879">
                <div class="mui-media-body">
                  <h1>御剑乘风来 除魔天地间</h1>
                  <p class='mui-ellipsis'>
                      <span>发表时间:2018-01-01 12:22:11</span>
                      <span>点击:0次</span>
                  </p>
                </div>
              </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    ecport default{
        data(){
            return{
                newslist:[]//存储新闻的空数组
            };
        },
        created(){
            this.getNewsList();
        },
        methods:{
            getNewsList(){
                //获取新闻列表
                this.$http.get("http://027xin.com:8899/api/getlunbo").then(result =>{
                    if(result.body.status === 0){
                        this.newslist = result.body.message;
                    }else{
                        Toast("获取新闻列表失败");
                    }
                });
            }
        }
    }
    
</script>

<style lang="less">
.mui-table-view {
   li {
      h1 {
        font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #0094ff;
      display: flex;
      justify-content: space-between;
    }
  }
}
    
</style>