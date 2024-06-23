<template>
  <div id="app">
    <nav v-for="(item, index) in dongtaiRouter" :key="index">
      <router-link :to="item.path">{{item.name}}</router-link>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/1" v-if="flag[0]">1</router-link>|
      <router-link to="/2" v-if="flag[1]">2</router-link>|
      <router-link to="/3" v-if="flag[2]">3</router-link>|
      <router-link to="/4" v-if="flag[3]">4</router-link>|
      <router-link to="/5" v-if="flag[4]">5</router-link> -->
    </nav>
    <button @click="login()">登录</button>
      <button @click="logout()">退出</button>
    <router-view />
  </div>
</template>

<script>
import { getRouter } from '@/utils/data'
import { resetRouter } from '@/router/index'
import dongtaiRouter from '@/utils/data'
export default {
  data() {
    return {
      flag: [false, false, false, false, false],
      routes: dongtaiRouter,
    }
  },
  name: 'App',
  methods: {
    login() {
      getRouter()
      console.log(123);
      console.log(this.flag);
      this.$forceUpdate();
    },
    logout() {
      resetRouter()
      this.$router.push('/')

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
