<template>
  <div id="user" v-if="blogs.length">
    <section class="user-info">
      <img :src="user.gravatar_url" :alt="user.email" :title="user.email" class="avatar">
      <h3>{{user.email}}</h3>
    </section>
    <section>
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">{{splitDate(blog.created_at).date}}</span>
          <span class="month">{{splitDate(blog.created_at).month}}月</span>
          <span class="year">{{splitDate(blog.created_at).year}}</span>
        </div>
        <h3>
          <router-link :to="`/detail/${blog.id}`">{{blog.title}}</router-link>
        </h3>
        <p>{{blog.description}}</p>
      </div>
    </section>
    <section class="pagination" v-if="blogs.length">
      <el-pagination
        :current-page="page"
        layout="prev,pager,next"
        :total="total"
        @current-change="onPageChange"
      ></el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="../My/template.less" lang="less"></style>
