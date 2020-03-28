<template>
  <div>
    <div class="book">
      <el-card :body-style="{ padding: '10px' }" class="flex-cc">
        <router-link :to="'/detail/' + book._id">
          <div class="flex-cc">
            <el-image
              style="width:100%; height: 200px"
              :src="book.image"
              alt
              :fit="fits[0]"
            />
          </div>
          <div class="flex-cc flexcol book__item">
            <p class="">{{book.name}}</p>
            <!-- <p class="book__description">介绍：{{book.description}}</p> -->

            <!-- <p class="book.manufacturer">商家:{{book.shop}}</p> -->
          </div>
        </router-link>
        <div class="flex-bc">
          <p class="book__price">￥{{book.price}}</p>
          <book-button :book="book"></book-button>
          <BookBuy></BookBuy>
        </div>
      </el-card>
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
  data(){
    return{
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down']
    }
  }
};
</script>
<style scoped>
.book {
  text-color: black;
  margin-bottom: 20px;

}
div.book__item > p{
  margin: 10px;
}
</style>