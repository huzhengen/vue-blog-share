<template>
  <div id="index">
    <section class="blog-posts" v-if="blogs.length">
      <div class="item" v-for="blog in blogs" :key="blog.id">
        <figure class="avatar" v-if="blog.user">
          <router-link :to="`/user/${blog.user.id}`">
            <img :src="blog.user.gravatar_url" :alt="blog.user.email">
            <figcaption>{{blog.user.email}}</figcaption>
          </router-link>
        </figure>
        <!-- <h3 v-if="blog.user"> -->
        <h3>
          <router-link :to="`/detail/${blog.id}`">
            {{blog.title}}
            <span>{{friendlyDate(blog.created_at)}}</span>
          </router-link>
        </h3>
        <!-- <p v-if="blog.user">{{blog.description}}</p> -->
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

<style scoped lang="less" src="./template.less"></style>