<template>
  <div>
    
    <el-card>
      <el-row :gutter="8">
        <el-col :xs="24" :sm="6" :md="4" :lg="6" class="flex-cc flexcol">
          <BookItem :book="book"></BookItem>
          <BookBuy :isCancel="true" :book = book></BookBuy>
        </el-col>
        <el-col :xs="24" :sm="6" :md="4" :lg="18">
          <div style="height: 300px;">
            <el-steps :active="0" direction="vertical" >
              <el-step title="下单成功" icon="el-icon-s-goods" description="等待快递收入" status="finish"></el-step>
              <el-step title="邮寄中" icon="el-icon-position" description="广州-中山-江门"></el-step>
              <el-step title="收货成功" icon="el-icon-location" description="五邑大学 12345678"></el-step>
            </el-steps>
          </div>
        </el-col>
      </el-row>
    </el-card>
    
  </div>
</template>

<script>
import BookItem from "@/components/Books/BookItem.vue";
import BookBuy from "@/components/Books/BookBuy.vue";
export default {
  props: ["book"],
  components: {
    BookItem,
    BookBuy
  }
};
</script>

<style>
</style>