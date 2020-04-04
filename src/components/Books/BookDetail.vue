<template>
  <div style="background-color:white;">
    
     
    <div>
      <el-row :gutter="8">
      <el-col :xs="24" :sm="10" :md="8" :lg="6" class="flex-cc">
        <el-image :src="book.image" style="height: 300px" :fit="fits[1]"/>
      </el-col>
      <el-col :xs="24" :sm="14" :md="16" :lg="18">
      <div class="margin-lg flexcol flex-bs" >
        <div class="detail">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          <p class="text-lg text-bold">{{book.name}}</p>
          <p class="text-sm text-blue">作者：{{book.author}}</p>

          <p class="text-df text-black">简介：{{book.description}}</p>
        </div>
        <div class="flex-sc">
          <p class="margin-sm text-price text-yellow">{{book.price}}</p>
          <book-button :book="book"></book-button>
          <div class="margin-sm">
            <bookBuy :book="book"></bookBuy>
          </div>
        </div>
      </div>
       </el-col>
       </el-row>
    </div>
     
    
  </div>
</template>

<style scoped>
div.detail > p {
  margin: 10px;
}
div.ratings > div {
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
      circleUrl: "https://cdn4.buysellads.net/uu/1/50174/1564282856-carbon.png",
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down']
    };
  }
};
</script>