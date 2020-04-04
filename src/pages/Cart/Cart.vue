<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-xs text-lg text-lg padding">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="cart.length!=0">
      <template v-for="book in cart">
        <el-card class="margin-sm">
           <BookDetail :book ="book"></BookDetail>
        </el-card> 
      </template>
    </div>
    <div v-else class="margin-sm padding-lr-lg">
      <div class="flex-cc">
        <img
          src="https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋网页端/images/none.png"
        />
        <div class="text-cyan text-lg">你的购物车空空如也！</div>
      </div>
    </div>
  </div>
</template>


  
<script>
// import BookItem from "@/components/Books/BookItem.vue";
// import BookButton from "@/components/Books/BookButton";
// import BookBuy from "@/components/Books/BookBuy";
import BookDetail from '@/components/Books/BookDetail'
export default {
  name: "home",
  data() {
    return {
      value: 4.7,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cartModule.cart.reverse();
    }
  },
  methods: {
    removeFromCart(bookId) {
      this.$store.commit("cartModule/REMOVE_FROM_CART", {
        bookId
      });
    }
  },
  components: {
    // "book-item": BookItem,
    // BookButton,
    //  BookBuy 
    BookDetail
  }
};
</script>