<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-sm">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>二手书店</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="margin-sm">
        <BookList></BookList>
    </div>
    
  </div>
</template>

<script>
import BookList from "@/components/books/BookList.vue";
export default {
  components:{
      BookList
  }
};
</script>

<style>
</style>