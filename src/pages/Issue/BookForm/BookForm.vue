<template>
<div class="padding-lg" style="background-color:white;">
  <el-breadcrumb separator-class="el-icon-arrow-right" class="text-xs text-lg text-lg padding">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>购物车</el-breadcrumb-item>
    </el-breadcrumb>
  <form @submit.prevent="saveBook">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>书名</label>
        <input type="text" placeholder="Name" v-model="bookModel.name" name="name" class="form-control" />
      </div>
      <div class="form-group">
        <label>价格</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="bookModel.price"
          name="price"
        />
      </div>
      <div class="form-group">
        <label>作者</label>
        <select type="text" class="form-control" v-model="bookModel.sortItem" name="sortItem">
          <template v-for="sortItem in sortNav">
            <option
              :value="sortItem._id"
              :selected="sortItem._id == (bookModel.sortItem && bookModel.sortItem._id)"
            >{{sortItem.name}}</option>
          </template>
        </select>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>封面</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="bookModel.image"
          name="image"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>简介</label>
        <textarea
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="bookModel.description"
          name="description"
        ></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Conditional rendering for input text -->
          <span v-if="isEditing">更新</span>
          <span v-else>提交</span>
        </button>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  props: ["bookModel", "sortNav", "isEditing"],
  methods: {
    saveBook() {
      this.$emit("save-book", this.bookModel);
      
    }
  }
};
</script>