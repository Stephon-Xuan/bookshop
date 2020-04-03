<template>
  <div class="flex-sc login" style="width:100%;height:100%;">
    <!-- <img src="./images/lookBook.svg" /> -->
    <div class="flex-cc" style="width:100%;">
      <el-card class="box-card login-in">
        <div class="flex-sc flexcol margin-lg">
          <div class="text-cyan text-sm text-bold flex-cc margin-sm"></div>
          <el-input placeholder="手机号" prefix-icon="el-icon-user-solid" class="margin-sm"></el-input>
          <el-input placeholder="验证码" prefix-icon="el-icon-key" class="margin-sm"></el-input>
          <router-link :to="'/'">
            <el-button type="primary" round>
              <span class="text-white">登录</span>
            </el-button>
          </router-link>
        </div>
      </el-card>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
    // Login(){
    //      this.$router.push({name: '/'})
    // }
  }
};
</script>

<style scoped>
img {
  height: 40%;
  /* background: url("../imgs/login/loginBg02.jpg") 0 0 no-repeat; */
  background-size: cover;
  overflow: hidden;
}
.login{
  
  background: url("https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋网页端/images/Loginp.svg") left center no-repeat;
  background-size: cover;
  /* overflow: hidden; */
}
.login-in{
    background: url("https://cdn.jsdelivr.net/gh/Stephon-Xuan/images/imgs/Myproject/书斋网页端/images/lookBook.svg") center 0 no-repeat;
}
</style>