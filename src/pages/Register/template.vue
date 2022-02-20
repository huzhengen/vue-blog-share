<template>
  <div id="register">
    <h4>邮箱</h4>
    <input v-model="email" placeholder="用户名">
    <h4>密码</h4>
    <input v-model="password" type="password" placeholder="密码">
    <h4>确认密码</h4>
    <input v-model="password_confirmation" type="password" placeholder="确认密码" @keyup.enter="onRegister">
    <el-button size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">已有账号？
      <router-link to="/login">立即登录</router-link>
    </p>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Login/template.less" lang="less"></style>
