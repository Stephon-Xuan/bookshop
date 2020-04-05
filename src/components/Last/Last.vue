<template>
  <div>
    <el-card class="box-card">
      <div>
        <span class="text-cyan text-lg text-bold">最新发布</span>
        <el-divider></el-divider>
        <book-list :books="books"></book-list>
      </div>
    </el-card>
  </div>
</template>

<script>
import BookList from "../Books/BookList";
export default {
  name: "last",
  components: {
    "book-list": BookList
  },
  props: ["books"],
  computed: {
    // newBooks(){
    //    return this.books.reverse()
    // }
    
  }
};
</script>

<style>
</style>