<template>
  <div>
    <book-detail :book="book"></book-detail>
  </div>
</template>

<script>
import BookDetail from '@/components/Books/BookDetail';
export default {
 
  computed: {
    book() {
      // return this.$store.state.booksModule.books[this.$route.params['id']];
      return this.$route.query.book
    }
  },
  //  props: ["book"],
  data(){
    return{
     
    }
  },
  components: {
    'book-detail': BookDetail,
  }
}
</script>