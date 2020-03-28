<template>
  <div id="app">
    <el-container>
      <el-header class="flex-bc">
        <div id="netName">
          <img src="./common/images/logo.png" alt="">
        </div>
        <el-menu
          default-active="1"
          class="el-menu-demo flex-ec"
          mode="horizontal"
          :router="true"
          active-text-color="#d4f8e8"
          text-color="#fff"
          background-color="#2f89fc"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
          <el-submenu index="2">
            <template slot="title">我的</template>
            <el-menu-item index="/login">登录</el-menu-item>
            <el-menu-item index="/cart">购物车</el-menu-item>
            <el-menu-item index="/order">订单</el-menu-item>
            <el-menu-item index="/404">动态(开发中)</el-menu-item>
            <el-menu-item index="/404">消息(开发中)</el-menu-item>
            <el-menu-item index="/about">关于我</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="/cart">购物车</el-menu-item>
          <el-menu-item index="3">订单管理</el-menu-item>-->
          <!-- <el-menu-item index="3">动态</el-menu-item>
          <el-menu-item index="4">消息</el-menu-item>
          <el-menu-item index="4">登录</el-menu-item>-->
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <!-- <el-footer class="flex-cc">@copyright 2020-03-27</el-footer> -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
@import url("./common/css/reset.css");
@import url("./common/css/flex.css");
@import url("./common/css/padding.css");
@import url("./common/css/margin.css");
@import url("./common/css/text.css");
@import url("./common/css/border.css");
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}

#netName img{
  height: 40px;
  width: 40px;
}

.el-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.el-header {
  background-color: #2f89fc;
  height: 150px;
  text-align: center;
  /* line-height: 150px; */
}

.el-main {
  flex: auto;
}
.el-footer {
  background-color: #40514e;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
</style>
