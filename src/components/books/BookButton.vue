<template>
  <div>
    <el-button v-if="isAdding" class="button" @click="addToCart">加入购物车</el-button>
    <el-button v-else class="button" @click="removeFromCart(product._id)">从购物车移除</el-button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    isAdding() {
      let isAdding = true;
      this.cart.map(product => {
        if (product._id === this.product._id) {
          isAdding = false;
        }
      });

      return isAdding;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('ADD_TO_CART', {
        product: this.product,
        
      })
      this.$message('添加成功');
    },
    removeFromCart(productId) {
      this.$store.commit('REMOVE_FROM_CART', {
        productId,
      })
      this.$message('取消成功');
    }
  }
}
</script>
<style scoped>
    .el-button{
      padding: 10px;
      background-color: #ff5722;
      border-radius: 2px;
      color: #fff;
      border: 0;
    }
</style>>