<template>
  <div>
    <div class="books">
      <div>
        <el-row :gutter="10">
        <div v-for="book in books">
            <el-col :xs="100" :sm="10" :md="10" :lg="4" :xl="20">
            <book-item :book="book"></book-item>
            </el-col>
        </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style>

.book__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import BookItem from "./BookItem.vue";
export default {
  name: "book-list",
  computed: {
    // a computed getter
    books() {
      return this.$store.state.books;
    }
  },
  components: {
    "book-item": BookItem
  },
  methods: {
    addToCart(book) {
      this.$store.commit("ADD_TO_CART", {
        book
      });
    }
  }
};
</script>