<template>
<div>
  <div class="flex-ss margin-sm">
    <el-tag>小说</el-tag>
    <el-tag type="success">科技</el-tag>
    <el-tag type="info">动漫</el-tag>
    <el-tag type="warning">计算机</el-tag>
    <el-tag type="danger">其他</el-tag>
  </div>
  <div>
      <book-list></book-list>
  </div>
</div>
</template>

<script>
import BookList from "@/components/books/BookList.vue";
export default {
    components:{
        "book-list": BookList,
    }
};
</script>

<style scoped>
</style>