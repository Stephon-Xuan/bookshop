<template>
  <div>
    
    <el-button v-if="isCancel" type="warning" size="small" autofocus @click="removeFromOrder(book._id)">取消订单</el-button>
    <router-link :to="{path:'/order'}" v-else>
    <el-button   type="danger" size="small" @click="addToOrder">购买</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['book',"isCancel"],
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
    order() {
    //   return this.$store.state.order;
    }
  },
  methods: {
    addToOrder() {
      this.$store.commit('orderModule/addOrder', {
        book:this.book}
        )
      this.$message('下单成功');
    },
     removeFromOrder(bookId) {
      this.$store.commit('orderModule/removeOrder', {
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
      background-color: #e62727;
      border-radius: 2px;
      color: #fff;
      border: 0;
    } */
</style>>