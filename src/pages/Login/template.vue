<template>
  <div id="login">
    <h4>用户名(测试用户名：sk)</h4>
    <input v-model="email" placeholder="用户名(测试用户名：sk)">
    <!-- <el-input v-model="email" placeholder="用户名"></el-input> -->
    <!-- <p class="error">当前用户名已注册</p> -->
    <h4>密码(测试密码：123456)</h4>
    <input v-model="password" type="password" placeholder="密码(测试密码：123456)" @keyup.enter="onLogin">
    <!-- <el-input v-model="password" type="password" placeholder="密码"></el-input> -->
    <!-- <p class="error">当前用户名已注册</p> -->
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">没有账号？
      <router-link to="/register">注册新用户</router-link>
    </p>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
