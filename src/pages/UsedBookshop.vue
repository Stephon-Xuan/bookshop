<template>
  <div style="background-color:white">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="text-lg text-lg padding" >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>二手书店</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <div class="margin-sm">
        <Sort></Sort>
    </div> -->
    <Last :books="usedBooks"></Last>
  </div>
</template>

<script>
import Sort from "@/components/Sort/Sort";
import Last from "@/components/Last/Last.vue";
import { mapState,mapGetters } from "vuex";
export default {
   
  components:{
      Sort,
      Last
  },
   created() {
    this.$store.dispatch("usedBooksModule/reqUsedBooks");
  },
  computed: {
    ...mapState({
      usedBooks: state => state.usedBooksModule.usedBooks
    }),
  
  }
};
</script>

<style>
</style>