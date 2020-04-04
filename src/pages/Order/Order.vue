<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-xs text-lg text-lg padding">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单</el-breadcrumb-item>
    </el-breadcrumb>

    <div v-if="orders.length!=0">
      <template v-for="book in orders">
        <div class="margin-sm padding-lr-lg">
          <!-- <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="4"> -->
          <!-- <book-item :book="book" :key="book._id"></book-item> -->
          <OrderDetail :book="book"></OrderDetail>
          <!-- </el-col> -->
        </div>
      </template>
    </div>
    <div v-else class="margin-sm padding-lr-lg">
      <div class="flex-cc">
          <img src="https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋网页端/images/none.png"/>
         <div class="text-cyan text-lg">暂无订单，快去下单吧！</div>
      </div>
    </div>
  </div>
</template>


  
<script>
import OrderDetail from "./OrderDetail/OrderDetail";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    orders() {
      return this.$store.state.orderModule.orders.reverse();
    }
  },
  methods: {
    // removeFromCart(bookId) {
    //   this.$store.commit("cartModule/REMOVE_FROM_CART", {
    //     bookId
    //   });
    // }
  },
  components: {
    OrderDetail
  }
};
</script>