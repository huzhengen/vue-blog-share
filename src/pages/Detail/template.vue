<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.gravatar_url" :alt="user.email" :title="user.email" class="avatar">
      <h3>{{title}}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{user.email}}</router-link>
        发布于{{friendlyDate(createdAt)}}
         <router-link :to="`/edit/${blogId}`">编辑</router-link>
      </p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" src="./template.less"></style>