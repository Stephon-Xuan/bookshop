<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in swiperList" :key="index">
        <div class="flex-cc">
          <el-image style="width: 100%; height: 300px" :src="item.url" :fit="fits[1]"></el-image>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      swiperList: [
        {
          id: 0,
          type: "image",
          url:
            "https://img11.360buyimg.com/n1/s200x200_jfs/t26623/338/419718625/245064/7ef5b21b/5b9106caNc9b79061.jpg"
        },
        {
          id: 1,
          type: "image",
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2754428046,2349790438&fm=15&gp=0.jpg"
        },
        {
          id: 2,
          type: "image",
          url:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4178874673,2129286990&fm=15&gp=0.jpg"
        },
        {
          id: 3,
          type: "image",
          url:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3678660447,2484452147&fm=15&gp=0.jpg"
        },
        {
          id: 4,
          type: "image",
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2745549471,1787401746&fm=26&gp=0.jpg"
        },
        {
          id: 5,
          type: "image",
          url:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=699500997,2050225132&fm=15&gp=0.jpg"
        },
        {
          id: 6,
          type: "image",
          url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3468305458,468279752&fm=15&gp=0.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff;
}
.image-style {
  /* width:100%;  */
  /* height:100%; */
  /* background-position:center; */
}
</style>