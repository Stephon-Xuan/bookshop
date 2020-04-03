<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="text-cyan text-lg text-bold">分类</span>
      </div>
      <div>
        <el-tabs :tab-position="'left'">
          <el-tab-pane
            v-for="(sortNavItem,index) in sortNav"
            :label="sortNavItem.sortName"
            :key="index"
          >
            <el-row :gutter="10">
              <div class="flex-es" v-for="(book,index) in sortNavItem.sortBooks" :key="index">
                <!-- <el-tag
                class="margin-xs"
                v-for="(labelNavItem,index) in sortNavItem.labelNav"
                :key="index"
                >{{labelNavItem.labelName}}</el-tag>-->
                <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="4">
                  <BookItem :book="book"></BookItem>
                </el-col>
              </div>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
// import BookList from "@/components/Books/BookList.vue";
import BookItem from "@/components/Books/BookItem";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    BookItem
  },
  created() {
    this.$store.dispatch("sortModule/reqSortBooks");
  },
  data() {
    return {};
  },

  computed: {
    ...mapState({
      sortNav: state => state.sortModule.sortNav
    })
  }
};
</script>

<style scoped>
/* .el-tabs__item{
  padding: 4px ! important
} */
</style>