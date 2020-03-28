<template>
  <div>
    <div class="flex-bc" style="height:300px;">
      <div class="flex-auto">
        <Carousel />
      </div>
      <div class="flex-sub flex-bc">
        <div class="flex-sub">
          <el-card class="box-card flex-cc flexcol" style="height:300px;borde">
            <router-link :to="'/usedbookshop'">
              <div class="flex-sub flex-bc">
                <div class="text-cyan text-sm text-bold">二手商店</div>
                <el-image style="width: 60%; height: 150px" :src="src[0]" :fit="fits[0]"></el-image>
              </div>
            </router-link>
            <div class="border-active"></div>
            <router-link :to="'/issue'">
              <div class="flex-auto flex-bc">
                <el-image style="width: 60%; height: 150px" :src="src[1]" :fit="fits[0]"></el-image>
                <div class="text-cyan text-sm text-bold">发布书籍</div>
              </div>
            </router-link>
          </el-card>
        </div>
        <div class="flex-twice">
          <el-card class="box-card flex-bs" style="padding:0; height:300px;">
            <el-image style="width: 100%; height:300px;" :src="src[2]" :fit="fits[0]"></el-image>
          </el-card>
        </div>
      </div>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="text-cyan text-sm text-bold">分类</span>
      </div>
      <Sort></Sort>
    </el-card>
    <el-card class="box-card">
      <div>
        <span class="text-cyan text-sm text-bold">热门推荐</span>
        <el-divider></el-divider>
        <book-list></book-list>
      </div>
    </el-card>
    <el-card class="box-card">
      <div>
        <span class="text-cyan text-sm text-bold">最新发布</span>
        <el-divider></el-divider>
        <book-list></book-list>
      </div>
    </el-card>
  </div>
</template>

<script>
import BookList from "@/components/books/BookList.vue";
import Sort from "@/components/sort/Sort.vue";
import Carousel from "./Carousel/Carousel";
export default {
  components: {
    "book-list": BookList,
    Carousel,
    Sort
  },
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      src: [
        "https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋网页端/images/usedBookshop.png",
        "https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋网页端/images/used.png",
        "https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋网页端/images/donate.png"
      ]
    };
  },

  methods: {}
};
</script>
<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>