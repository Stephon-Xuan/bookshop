<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <p>后台管理页</p>
          <ul class="admin-menu">
            <li>
              <router-link to="/admin">商品展示</router-link>
            </li>
            <li>
              <router-link to="/admin/new">创建商品</router-link>
            </li>
            <li>
              <router-link to="/admin/Edit/动态匹配">编辑商品</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>