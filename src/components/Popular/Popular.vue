<template>
  <div>
    <el-card class="box-card">
      <div>
        <span class="text-cyan text-lg text-bold">热门推荐</span>
        <el-divider></el-divider>
        <book-list :books="books"></book-list>
      </div>
    </el-card>
  </div>
</template>

<script>
import BookList from "../Books/BookList";
export default {
   name: "popular",
    components:{
        "book-list":BookList
    },
    props:['books']
};
</script>

<style>
</style>