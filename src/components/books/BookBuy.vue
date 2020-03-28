<template>
  <div>
    <el-button  class="button" @click="addToOrder">购买</el-button>
    
  </div>
</template>

<script>
export default {
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
    order() {
    //   return this.$store.state.order;
    }
  },
  methods: {
    addToOrder() {
      this.$store.commit('ADD_TO_CART', {
        product: this.product,
        
      })
      this.$message('购买成功');
    }
  }
}
</script>
<style scoped>
    .el-button{
      padding: 10px;
      background-color: #e62727;
      border-radius: 2px;
      color: #fff;
      border: 0;
    }
</style>>