<template>
  <div id="edit">
    <h1>写博客</h1>
    <h3>博客标题</h3>
    <el-input v-model="title"></el-input>
    <!-- <p class="msg">限30个字</p> -->
    <h3>博客简介</h3>
    <el-input type="textarea" :autosize="{minRows:2,maxRows:6}" v-model="description"></el-input>
    <!-- <p class="msg">限30个字</p> -->
    <h3>博客内容</h3>
    <el-input type="textarea" :autosize="{minRows:4,maxRows:30}" v-model="content"></el-input>
    <!-- <p class="msg">限30个字</p> -->
    <p>
      <label for>是否展示到首页：</label>
      <el-switch v-model="at_index" active-color="#FD9F2B" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Edit/template.less" lang="less"></style>
