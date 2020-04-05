<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-xs text-lg text-lg padding">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布书籍</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="margin-lr-lg">
    <BookForm @save-book="addBook" :book="book"></BookForm>
    </el-card>
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
        image: "https://file.ituring.com.cn/SmallCover/19031b1ec8051efc1c67",
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