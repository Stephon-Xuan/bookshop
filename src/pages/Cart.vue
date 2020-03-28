<template>
  <div class="title">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-sm">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <template v-for="book in cart">
      <div class="margin-sm">
      <book-item :book="book" :key="book._id"></book-item>
      </div>
    </template>
  </div>
</template>


  
<script>
import BookItem from "@/components/books/BookItem.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    removeFromCart(bookId) {
      this.$store.commit("REMOVE_FROM_CART", {
        bookId
      });
    }
  },
  components: {
    "book-item": BookItem
  }
};
</script>