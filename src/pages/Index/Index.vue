<template>
  <div>
    <div>
      <el-col :xs="24" :sm="10" :md="12" :lg="14" :xl="12">
        <Carousel :carousel = "carousel"/>
      </el-col>
      <el-col :xs="24" :sm="14" :md="12" :lg="10" :xl="12">
        <div class="flex-bc">
          <el-col :xs="12" :sm="14" :md="12" :lg="12" :xl="12">
            <el-card class="flex-cc flexcol" style="height:300px;" shadow="hover">
              <router-link :to="'/usedBookshop'">
                <el-row :gutter="10" class="flex-cc">
                  <el-col :xs="4" :sm="14" :md="12" :lg="10" :xl="12">
                    <div class="text-cyan text-lg text-bold">二手书店</div>
                  </el-col>
                  <el-col :xs="18" :sm="10" :md="12" :lg="14" :xl="12">
                    <el-image style="width: 100%; height:150px;" :src="src[0]" :fit="fits[0]"></el-image>
                  </el-col>
                </el-row>
              </router-link>
              <div class="border-active"></div>
              <router-link :to="'/issue'">
                <el-row :gutter="10" class="flex-cc">
                  <el-col :xs="18" :sm="10" :md="12" :lg="14" :xl="12">
                    <el-image style="width: 100%; height: 150px" :src="src[1]" :fit="fits[0]"></el-image>
                  </el-col>
                  <el-col :xs="4" :sm="14" :md="12" :lg="10" :xl="12">
                    <div class="text-cyan text-lg text-bold">发布书籍</div>
                  </el-col>
                </el-row>
              </router-link>
            </el-card>
          </el-col>

          <el-col :xs="12" :sm="10" :md="12" :lg="12" :xl="12">
            <router-link :to="'/donate'">
              <el-card class="box-card flex-cc" style="height:300px;" shadow="hover">
                <el-image style="width: 100%; height:250px;" :src="src[2]" :fit="fits[4]"></el-image>
              </el-card>
            </router-link>
          </el-col>
        </div>
      </el-col>
    </div>
    <div>
      <Sort></Sort>
    </div>
    <div>
      <Popular :books="books"></Popular>
    </div>
    <div>
      <Last :books="books"></Last>
    </div>
  </div>
</template>

<script>

import Sort from "@/components/Sort/Sort.vue";
import Popular from "@/components/Popolar/Popular.vue";
import Last from "@/components/Last/Last.vue";
import Carousel from "./Carousel/Carousel";
import { mapState,mapGetters } from "vuex";
export default {
  components: {
    Carousel,
    Sort,
    Last,
    Popular
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
   created() {
     this.$store.dispatch("carouselModule/reqCarousel");
    this.$store.dispatch("booksModule/reqShopBooks");
  },
  computed: {
    ...mapState({
      carousel:state => state.carouselModule.carousel,
      books: state => state.booksModule.books
    }),
  
  }
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