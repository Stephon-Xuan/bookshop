<template>
  <div>
    <div class="books">
      <div>
        <el-row :gutter="8">
          <div v-for="book in books">
            <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="4">
              <book-item :book="book"></book-item>
            </el-col>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style>
.book__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import BookItem from "./BookItem";

export default {
   components: {
    "book-item": BookItem
  },
  props:['books']
 
}
</script>