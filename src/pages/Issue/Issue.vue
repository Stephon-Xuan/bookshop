<template>
  <div>
    <BookForm @save-book="addBook" :book="book"></BookForm>
  </div>
</template>
  
<script>
import BookForm from "./BookForm/BookForm";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      book: {
        _id: "1000000",
        name: "",
        description:"",
        image: "https://file.ituring.com.cn/SmallCover/181054529974c29f37d5",
        price: 0,
        author: ""
      }
    };
  },
  methods: {
    addBook(book) {
      // console.log('book', book);
      // ...mapMutations({})
      this.$store.commit("usedBooksModule/addUsedBook", 
        this.book,
      )
       console.log(this.book);
      this.$message({
        message:'添加成功',
        type: 'success',
        duration:1000
      });
    }
     
  },
  components: {
    BookForm
  }
};
</script>