<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-xs text-lg text-lg padding">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="cart.length!=0">
      <template v-for="book in cart">
        <div class="margin-sm">
          <!-- <el-tag
                class="margin-xs"
                v-for="(labelNavItem,index) in sortNavItem.labelNav"
                :key="index"
          >{{labelNavItem.labelName}}</el-tag>-->
          <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="4">
            <book-item :book="book" :key="book._id"></book-item>
          </el-col>
        </div>
      </template>
    </div>
    <div v-else class="margin-sm padding-lr-lg">
      <div class="flex-cc">
        <img
          src="https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋网页端/images/none.png"
        />
        <div class="text-cyan text-lg">购物车空空如也！</div>
      </div>
    </div>
  </div>
</template>


  
<script>
import BookItem from "@/components/Books/BookItem.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cartModule.cart;
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
    "book-item": BookItem
  }
};
</script>