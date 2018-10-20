<template>
    <div>
        <div id="slider" class="mui-slider">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
              <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                  推荐
              </a>
              <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                  热点
              </a>
              <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                  北京
              </a>
              <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                  社会
              </a>
              <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                  娱乐
              </a>
          </div>
    </div>
</div>

    </div>
</template>
<script>
    // import mui from "../../assets/mui/js/mui.min.js";
   export default {
  data() {
    return {
      cates: [], // 所有分类的列表数组
      list: [] // 图片列表的数组
    };
  },
  created() {
    this.getAllCategory();
    // 默认进入页面，就主动请求 所有图片列表的数据
    this.getPhotoListByCateId(0);
  },
  mounted() {
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get("http://027xin.com:8899/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          // 手动拼接出一个最完整的 分类列表
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getPhotoListByCateId(cateId) {
      // 根据 分类Id，获取图片列表
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
  }
};
    

</script>
