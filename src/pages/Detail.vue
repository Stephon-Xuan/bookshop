<template>
  <div style="background-color:white;">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-lg padding">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>书籍详情</el-breadcrumb-item>
    </el-breadcrumb>
    <book-detail :book="book"></book-detail>
    <el-divider></el-divider>
    <Ratings></Ratings>
  </div>
</template>

<script>
import BookDetail from "@/components/Books/BookDetail";
import Ratings from "@/components/Ratings/Ratings";
export default {
  computed: {
    book() {
      // return this.$store.state.booksModule.books[this.$route.params['id']];
      // return this.$route.query.book
      return JSON.parse(window.localStorage.book);
    }
  },
  //  props: ["book"],
  data() {
    return {};
  },
  components: {
    "book-detail": BookDetail,
    Ratings
  }
};
</script>