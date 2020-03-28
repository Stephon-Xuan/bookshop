<template>
  <div>
    <book-detail :book="book"></book-detail>
  </div>
</template>

<script>
import BookDetail from '@/components/books/BookDetail.vue';
export default {
  created() {
    // 跳转到详情时，如果本地状态里面不存在此商品，从后端获取此商品详情
    const { name } = this.book;
    // if (!name) {
    //   this.$store.dispatch('bookById', {
    //     bookId: this.$route.params['id']
    //   });
    // }
  },
  computed: {
    book() {
      return this.$store.state.books[this.$route.params['id']];
    }
  },
  components: {
    'book-detail': BookDetail,
  }
}
</script>