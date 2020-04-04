<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(book,index) in carousel" :key="index">
        <!-- <router-link :to="{path: '/detail', query:{book}}"> -->
        
          <div class="flex-cc" @click="GoTo(book)">
            <el-image style="width: 100%; height: 250px" :src="book.image" :fit="fits[1]"></el-image>
          </div>
          
        <!-- </router-link> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ["carousel"],
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"]
    };
  },
  methods: {
    GoTo(book) {
      this.$router.push("detail");
      window.localStorage.setItem("book", JSON.stringify(book));
      // console.log(book)
    }
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