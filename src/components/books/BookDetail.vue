<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-sm">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>书籍详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex-ss">
      <div class="margin-sm">
        <el-image :src="book.image" style="width: 300px; height: 400px" />
      </div>
      <div class="margin-sm flexcol flex-bc" style="width:50%; height:400px">
        <div class="detail">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          <p class="text-lg">{{book.name}}</p>
          <p>{{book.shop}}</p>

          <p>{{book.description}}</p>
        </div>
        <div class="flex-bc">
          <p class="margin-sm text-price text-yellow">{{book.price}}</p>
          <book-button :book="book"></book-button>
          <div class="margin-sm">
              <bookBuy> </bookBuy>
          </div>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="text-sm text-cyan">评论 <el-link icon="el-icon-edit">编辑</el-link></div>
    
    <div class="flex-ss ratings margin-sm" v-for="rating in 10">
      <div class="flexcol flex-sc">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div>盛夏</div>
      </div>
      <div class="flexcol flex-bs" style="width:80%;">
        <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
        <p>这本书挺好的</p>
        <div class="text-blue">回复</div>
        </div>
    </div>
  </div>
</template>

<style scoped>
div.detail > p {
  margin: 10px;
}
div.ratings >div{
  margin: 10px;
}
</style>



<script>
import BookButton from "./BookButton";
import BookBuy from "./BookBuy";
export default {
  props: ["book"],
  components: {
    "book-button": BookButton,
    BookBuy
  },
  data() {
    return {
      value: 4.7,
      circleUrl: "https://cdn4.buysellads.net/uu/1/50174/1564282856-carbon.png"
    }
  }
};
</script>