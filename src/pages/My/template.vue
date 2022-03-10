<template>
  <div id="my">
    <section class="user-info">
      <img :src="user.gravatar_url" :alt="user.email" :title="user.email" class="avatar">
      <h3>{{user.email}}</h3>
    </section>
    <section v-if="blogs.length">
      <router-link class="item" :to="`/detail/${blog.id}`" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">{{splitDate(blog.created_at).date}}</span>
          <span class="month">{{splitDate(blog.created_at).month}}月</span>
          <span class="year">{{splitDate(blog.created_at).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
        <div class="actions">
          <router-link :to="`/edit/${blog.id}`">编辑</router-link>
          <a href="javascript:;" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
      </router-link>
    </section>
    <section v-else>暂时还没有博客</section>
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

<style scoped lang="less" src="./template.less"></style>
