<template>
  <header class="login">
    <template>
      <h1><router-link to="/">时空博客</router-link></h1>
      <template v-if="isLogin">
        <router-link to="/create"
          ><i class="edit el-icon-plus"></i
        ></router-link>
        <div class="user">
          <!-- <img class="avatar" :src="user.gravatar_url" :alt="user.email" :title="user.email"> -->
          {{ user.email }}
          <ul>
            <li>
              <router-link to="/my">我的</router-link>
            </li>
            <li>
              <a href="javascript:;" @click="onLogout">注销</a>
            </li>
          </ul>
        </div>
      </template>
      <div v-if="!isLogin">
        <div class="btns">
          <router-link to="/login">
            立即登录
          </router-link>
          <router-link to="/register">
            注册账号
          </router-link>
        </div>
      </div>
    </template>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isLogin', 'user']),
  },
  created() {
    this.checkLogin()
  },
  // mounted() {
  //  this.checkLogin()
  // },
  methods: {
    ...mapActions(['checkLogin', 'logout']),
    async onLogout() {
      const res = await this.logout()
      if (!res.isLogin) {
        this.$router.push({
          path: this.$route.query.redirect || '/',
        })
      }
    },
  },
}
</script>

<style lang="less">
@import '../assets/base.less';

header.no-login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 30px 0 0 0;
    text-transform: uppercase;
    a {
      color: #fff;
    }
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
}

header.login {
  display: flex;
  align-items: center;
  background: @bgColor;

  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    flex: 1;
    a {
      color: #fff;
    }
  }

  .btns {
    a {
      margin: 0 5px 0 0;
      color: #fff;
    }
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }

  .user {
    position: relative;
    font-size: 16px;
    color: #fff;
    padding-left: 10px;
    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin: 0;
      padding: 0;
      background-color: #fff;
      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;
        &:hover {
          background-color: #eaeaea;
        }
      }
    }
    &:hover ul {
      display: block;
    }
  }
}
</style>
