<template>
  <div>
    <div class="text-cyan text-lg text-bold margin-lg">
      评论
      <el-link icon="el-icon-edit">编辑</el-link>
    </div>

    <div class="flex-ss ratings margin-sm" v-for="rating in 10">
      <div class="flexcol flex-sc">
        <div class="block">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <div>盛夏</div>
      </div>
      <div class="flexcol flex-bs" style="width:80%;">
        <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
        <p>这本书挺好的</p>
        <div class="text-blue">回复</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: "Ratings",
  data() {
    return {
      value: 4.7,
      circleUrl: "https://cdn4.buysellads.net/uu/1/50174/1564282856-carbon.png",
      fits: ["fill", "contain", "cover", "none", "scale-down"]
    };
  }
};
</script>

<style>
</style>