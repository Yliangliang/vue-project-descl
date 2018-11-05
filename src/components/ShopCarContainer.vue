<template>
<div class="shopcar-container">
  <div class="goods-list">
    <!-- 商品列表项区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch></mt-switch>
          <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200119256512.jpg">
          <div class="info">
            <h1>华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
            <p>
              <span class="price">￥2199</span>
              <numbox></numbox>
              <a href="#">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- 结算区域 -->
  <div class="mui-card">
    <div class="mui-card-content">
      <div class="mui-card-content-inner jiesuan">
        <div class="left">
          <p>总计（不含运费）</p>
          <p>已勾选商品 <span class="red"></span> 件， 总价 <span class="red"></span></p>
        </div>
        <mt-button type="danger">去结算</mt-button>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="less">
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
    
</style>