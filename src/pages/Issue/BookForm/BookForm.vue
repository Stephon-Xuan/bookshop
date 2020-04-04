<template>
  <div class style>
    
    <div class="padding flex-cc" style="width:100%">
      <form>
        <div class="flex-cc">
          
          <el-col :xs="24" :sm="16" :md="16" :lg="16" class="margin-right-lg">
            <div class="form-group">
              <label>书名</label>
              <el-input
                type="text"
                placeholder="Name"
                v-model="book.name"
                name="name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label>作者</label>
              <el-input type="text" placeholder="author" v-model="book.author" name="price" />
            </div>
            <div class="form-group">
              <label>价格</label>
              <el-input
                type="number"
                class="form-control"
                placeholder="Price"
                v-model="book.price"
                name="price"
              />
            </div>
            <div class="form-group">
              <label>简介</label>
              <el-input
                type="textarea"
                class="form-control"
                placeholder="简介内容"
                rows="5"
                v-model="book.description"
                maxlength="30"
                show-word-limit
              ></el-input>
            </div>
          
          <!-- <div class="form-group">
        <label>作者</label>
        <select type="text" class="form-control" v-model="book.sortItem" name="sortItem">
          <template v-for="sortItem in sortNav">
            <option
              :value="sortItem._id"
              :selected="sortItem._id == (book.sortItem && book.sortItem._id)"
            >{{sortItem.name}}</option>
          </template>
        </select>
          </div>-->
          </el-col>
          <el-col :xs="24" :sm="8" :md="8" :lg="8">
          <div>
            <div class="form-group">
              <label>封面链接</label>
              <!-- <el-input
              type="text"
              lass="form-control"
              placeholder="Image"
              v-model="book.image"
              name="image"
              class="form-control"
              />-->
              <div>
                <img src="https://file.ituring.com.cn/SmallCover/181054529974c29f37d5" />
              </div>
            </div>
          </div>
        </el-col>
        </div>
        <div class="form-group flex-cc">
          <router-link :to="{path: '/usedBookshop'}">
          <el-button type="primary" round @click="saveBook">
            <i class="fa fa-pencil"></i>
            <span>发布到二手书店</span>
          </el-button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
  methods: {
    saveBook() {
      this.$emit("save-book", this.book);
      // console.log(this.book);
      // this.$router.push({name: 'usedBookshop'})
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-top: 10px;
}
</style>