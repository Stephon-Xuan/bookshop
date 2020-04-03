<template>
  <div>
    <el-button v-if="isAdding" type="warning" size="small" autofocus @click="addToCart">加入购物车</el-button>
    <el-button v-else type="warning" size="small" autofocus @click="removeFromCart(book._id)">从购物车移除</el-button>
  </div>
</template>

<script>
export default {
  props: ['book'],
  computed: {
    isAdding() {
      let isAdding = true;
      this.cart.map(book => {
        if (book._id === this.book._id) {
          isAdding = false;
        }
      });
      return isAdding;
    },
    cart(){
      return this.$store.state.cartModule.cart;
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('cartModule/addCart', {
        book: this.book,
      })
       console.log(this.book);
      this.$message({
        message:'添加成功',
        type: 'success',
        duration:1000
      });
    },
    removeFromCart(bookId) {
      this.$store.commit('cartModule/removeCart', {
        bookId,
      })
      this.$message({
        message:'取消成功',
        type: 'warning',
        duration:1000
      });
    }
  }
}
</script>
<style scoped>
    /* .el-button{
      padding: 6px;
      background-color: #ff5722;
      border-radius: 2px;
      color: #fff;
      border: 0;
    }
    .el-button:hover{
       background-color: #ff5722;
    } */
</style>>