<template>
  <div>
    <div class="book" style="height:240px; overflow:hidden;">
      <!-- <el-card :body-style="{ padding: '5px' }" class="flex-cc"> -->
        <!-- <router-link :to="'/detail/' + book._id"> -->
        <!-- <router-link :to="{path: '/detail', query:{book}}"> -->
        <div @click="GoTo">
        <el-card shadow=hover body-style="padding:0">
          <div class="flex-cc">
            <el-image style="width:100%; height: 140px" :src="book.image" alt :fit="fits[1]" />
          </div>
             </el-card>
          <div class="flex-cc flexcol">
            <p class='text-df'>{{book.name}}</p>
            <!-- <p class="book__description">介绍：{{book.description}}</p> -->
            <p class="text-sm text-blue">作者:{{book.author}}</p>
          </div>
        <!-- </router-link> -->
        </div>
      <!-- </el-card> -->
    </div>
  </div>
</template>

<script>
import BookButton from "./BookButton";
import BookBuy from "./BookBuy";
export default {
  name: "book-item",
  props: ["book"],
  components: {
    "book-button": BookButton,
    BookBuy
  },
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
       value: 5
    };
  },
  methods:{
    GoTo(){
      this.$router.push('detail')
      window.localStorage.setItem("book",JSON.stringify(this.book))
    }
  }
};
</script>
<style scoped>
.book {
  text-color: black;
  margin-bottom: 20px;
}
div.book__item > p {
  margin: 4px;
}
</style>